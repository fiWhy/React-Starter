"use strict";
const Generator = require("yeoman-generator");
const files = require("./files");
const textHelpers = require("../../helpers/text");
const { isBooleanName } = require("../../helpers/types");
const { sourceRoot, defaultActionsName } = require("../../config/main")();
const { countFoldersFromRoot } = require("../../helpers/folders");

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);

		this.argument("componentName", {
			type: String,
			required: true
		});

		this.option("route", {
			type: String
		})
			.option("reducer", {
				type: String
			})
			.option("action", {
				type: String
			});

		this.mergedConfig = Object.assign(
			{
				sourceRoot
			},
			this.config.getAll()
		);

		this.argumentsHelp();
	}

	initializing() {
		const { componentName } = this.options;
		const { componentNamePreparation } = textHelpers;
		let preparation = componentNamePreparation(componentName);
		const countFoldersToRoot = countFoldersFromRoot(sourceRoot, preparation.path);
		preparation.pathToRoot = "../".repeat(countFoldersToRoot + 1);
		this.props = { component: preparation };
	}

	joinPropSettings() {
		const { componentNamePreparation } = textHelpers;
		const { route, action, reducer } = this.options;
		const { component: { dashed } } = this.props;
		const propsAdditional = { action: null, reducer: null, route: null };

		if (route) {
			const value = isBooleanName(route) ? `/${dashed}` : route;
			propsAdditional.route = {
				value
			};
		}

		if (action) {
			const value = isBooleanName(action) ? defaultActionsName : action;
			propsAdditional.action = Object.assign(
				{
					value
				},
				componentNamePreparation(value)
			);
		}

		if (reducer) {
			const value = isBooleanName(reducer) ? defaultActionsName : reducer;
			propsAdditional.reducer = Object.assign(
				{
					value
				},
				componentNamePreparation(value)
			);
		}

		Object.assign(this.props, propsAdditional);
	}

	generatePresentation() {
		const { component: { name, fullPath }, action, reducer } = this.props;
		this.composeWith(require.resolve("../presentation"), {
			arguments: [`${fullPath}/presentations/${name}`]
		});

		if (action) {
			this.composeWith(require.resolve("../action"), {
				arguments: [`${fullPath}/actions/${action.value}`]
			});
		}

		if (reducer) {
			const { genComponentName } = textHelpers;
			const options = {
				action: action ? `../actions/${action.value}.action` : false,
				actionName: action ? `${genComponentName(action.value)}Action` : false
			};
			this.composeWith(
				require.resolve("../reducer"),
				Object.assign(
					{
						arguments: [`${fullPath}/reducers/${reducer.value}`]
					},
					options
				)
			);
		}
	}

	writing() {
		files(
			Object.assign(this.props, { options: this.options }, this.mergedConfig)
		).forEach(file => {
			this.fs.copyTpl(
				this.templatePath(file.from),
				this.destinationPath(file.to),
				this.props
			);
		});
	}
};
