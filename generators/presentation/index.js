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
		const { componentName } = this.options;
		const { componentNamePreparation } = textHelpers;
		const { dashed, upperCamel, upper, camel } = componentNamePreparation(componentName);
		let props = {};
		props.componentNameLower = dashed;
		props.componentNameCamel = camel;
		props.componentName = upperCamel;
		props.upperComponentName = upper;
		this.props = props;
	}

	writing() {
		files(
			Object.assign(this.props, this.defaultConfig, this.config.getAll())
		).forEach(file => {
			this.fs.copyTpl(
				this.templatePath(file.from),
				this.destinationPath(file.to),
				this.props
			);
		});
	}
};
