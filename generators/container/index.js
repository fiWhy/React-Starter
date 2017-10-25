"use strict";
const Generator = require("yeoman-generator");
const files = require("./files");
const textHelpers = require("../../helpers/text");
const { isBooleanName } = require("../../helpers/types");
const { sourceRoot, defaultActionsName } = require("../../config/main")();

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
		const { componentName, route, action, reducer } = this.options;
		const {
			componentNamePreparation,
			genComponentName,
			toDashCase,
			folderPath
		} = textHelpers;
		const { setted, dashed, upperCamel, upper, camel } = componentNamePreparation(
			componentName
		);

		let props = {};
		props.clearComponentName = componentName;
		props.componentNameLower = dashed;
		props.componentNameCamel = camel;
		props.componentName = upperCamel;
		props.upperComponentName = upper;
		props.componentFullPath = `${folderPath(setted)}/${props.componentNameLower}`;

		if (route) {
			props.route = isBooleanName(route) ? `/${props.componentNameLower}` : route;
		} else {
			props.route = null;
		}

		if (action) {
			props.action = isBooleanName(action) ? defaultActionsName : action;
			props.actionName = genComponentName(props.action);
			props.actionDashed = toDashCase(props.action);
		} else {
			props.action = null;
		}

		if (reducer) {
			props.reducer = isBooleanName(reducer) ? defaultActionsName : reducer;
			props.reducerName = genComponentName(props.reducer);
			props.reducerDashed = toDashCase(props.reducer);
		} else {
			props.reducer = null;
		}

		this.props = props;
	}

	generatePresentation() {
		const { clearComponentName } = this.props;
		this.composeWith(require.resolve("../presentation"), {
			arguments: [`${clearComponentName}/presentations/${clearComponentName}`]
		});
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
