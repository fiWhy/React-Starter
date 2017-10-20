"use strict";
const Generator = require("yeoman-generator");
const files = require("./files");
const textHelpers = require("../../helpers/text");

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);

		this.option("componentName", {
			type: String,
			required: true
		});
	}

	initializing() {
		const { toDashCase, genComponentName, toCamelCase } = textHelpers;
		const { componentName } = this.options;
		let props = {};
		props.componentNameLower = toDashCase(componentName);
		props.componentNameCamel = toCamelCase(componentName);
		props.componentName = genComponentName(componentName);
		props.upperComponentName = props.componentName.toUpperCase();
		this.props = props;
	}

	writing() {
		files(this.props).forEach(file => {
			this.fs.copyTpl(
				this.templatePath(file.from),
				this.destinationPath(file.to),
				this.props
			);
		});
	}
};
