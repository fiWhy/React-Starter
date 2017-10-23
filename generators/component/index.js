"use strict";
const Generator = require("yeoman-generator");
const files = require("./files");
const textHelpers = require("../../helpers/text");
const { sourceRoot } = require("../../config/main")();

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);

		this.argument("componentName", {
			type: String,
			required: true
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
		const { componentName: nameWithPath } = this.options;
		const componentName = nameFromPath(nameWithPath);
		let props = {};
		props.componentNameLower = toDashCase(componentName);
		props.componentNameCamel = toCamelCase(componentName);
		props.componentName = genComponentName(componentName);
		props.upperComponentName = props.componentName.toUpperCase();
		props.componentFullPath = `${folderPath(nameWithPath)}/${props.componentNameLower}`;
		this.props = props;
	}

	writing() {
		files(Object.assign(this.props, this.mergedConfig)).forEach(file => {
			this.fs.copyTpl(
				this.templatePath(file.from),
				this.destinationPath(file.to),
				this.props
			);
		});
	}
};
