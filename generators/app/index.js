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
			this.config.set("sourceRoot", props.sourceRoot);
			this.props = props;
		});
	}

	generateStarterData() {
		const { starterData } = this.props;
		const options = {
			route: "",
			action: "",
			reducer: ""
		};
		if (starterData) {
			this.composeWith(
				require.resolve("../container"),
				Object.assign(
					{
						arguments: ["components/home"]
					},
					options
				)
			);
			this.composeWith(
				require.resolve("../container"),
				Object.assign(
					{
						arguments: ["components/dashboard"]
					},
					options
				)
			);
		}
	}

	conformProps() {
		const { projectKeywords } = this.props;
		this.props.projectKeywords = projectKeywords ? projectKeywords.split(",") : [];
	}

	writing() {
		files(Object.assign(this.props, this.config.getAll())).forEach(file => {
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
