"use strict";
const Generator = require("yeoman-generator");
const yosay = require("yosay");
const files = require("./files");
const prompts = require("./prompts");

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);
		this.appname = "React boilerplate";
	}

	prompting() {
		// Have Yeoman greet the user.
		this.log(yosay("Welcome to react16 generator!"));

		return this.prompt(prompts).then(props => {
			// To access props later use this.props.someAnswer;
			this.props = props;
		});
	}

	generateStarterData() {
		const { starterData } = this.props;
		if (starterData) {
			this.composeWith(require.resolve("../component"), {
				componentName: "Home"
			});
			this.composeWith(require.resolve("../component"), {
				componentName: "Dashboard"
			});
		}
	}

	conformProps() {
		const { projectKeywords } = this.props;
		this.props.projectKeywords = projectKeywords ? projectKeywords.split(",") : [];
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

	install() {
		this.installDependencies();
	}
};
