"use strict";
const Generator = require("yeoman-generator");
const files = require("./files");
const textHelpers = require("../../helpers/text");
const { sourceRoot } = require("../../config/main")();

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);

		this.argument("actionName", {
			type: String,
			required: true
		});

		this.option("async", {
			type: Boolean
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
		const { actionName } = this.options;
		const { componentNamePreparation } = textHelpers;
		this.props = componentNamePreparation(actionName);
	}

	writing() {
		files(
			Object.assign(this.props, this.defaultConfig, this.options, this.config.getAll())
		).forEach(file => {
			this.fs.copyTpl(
				this.templatePath(file.from),
				this.destinationPath(file.to),
				this.props
			);
		});
	}
};
