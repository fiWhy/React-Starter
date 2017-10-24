"use strict";
const Generator = require("yeoman-generator");
const files = require("./files");
const textHelpers = require("../../helpers/text");
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
		const {
			toDashCase,
			genComponentName,
			toCamelCase,
			nameFromPath,
			folderPath
		} = textHelpers;
		const { componentName: nameWithPath, route, action, reducer } = this.options;
		const componentName = nameFromPath(nameWithPath);
		let props = {};
		props.componentNameLower = toDashCase(componentName);
		props.componentNameCamel = toCamelCase(componentName);
		props.componentName = genComponentName(componentName);
		props.upperComponentName = props.componentName.toUpperCase();
		props.componentFullPath = `${folderPath(nameWithPath)}/${props.componentNameLower}`;

		if (route === undefined) {
			props.route = null;
		} else {
			props.route = route ? route : `/${props.componentNameLower}`;
		}

		if (action === undefined) {
			props.action = null;
		} else {
			props.action = action ? action : defaultActionsName;
			props.actionName = genComponentName(props.action);
			props.actionDashed = toDashCase(props.action);
		}

		if (reducer === undefined) {
			props.reducer = null;
		} else {
			props.reducer = reducer ? reducer : defaultActionsName;
			props.reducerName = genComponentName(props.reducer);
			props.reducerDashed = toDashCase(props.reducer);
		}

		this.props = props;
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
