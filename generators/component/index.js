"use strict";
const Generator = require("yeoman-generator");
const files = require("./files");
const prompts = require("./prompts");
const textHelpers = require("../../helpers/text");

module.exports = class extends Generator {
	prompting() {
		return this.prompt(prompts).then(props => {
			props.componentNameLower = textHelpers.toDashCase(props.componentName);
			this.props = props;
		});
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
