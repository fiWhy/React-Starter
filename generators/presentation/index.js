// "use strict";
// const Generator = require("yeoman-generator");
// const files = require("./files");
// const textHelpers = require("../../helpers/text");
// const { sourceRoot } = require("../../config/main")();

// module.exports = class extends Generator {
// 	constructor(args, opts) {
// 		super(args, opts);

// 		this.argument("presentationName", {
// 			type: String,
// 			required: true
// 		});

// 		this.defaultConfig = {
// 			sourceRoot
// 		};

// 		this.argumentsHelp();
// 	}

// 	initializing() {
// 		const { toDashCase, genComponentName, toCamelCase } = textHelpers;
// 		const { componentName } = this.options;
// 		let props = {};
// 		props.componentNameLower = toDashCase(presentationName);
// 		props.componentNameCamel = toCamelCase(presentationName);
// 		props.componentName = genComponentName(presentationName);
// 		props.upperComponentName = props.presentationName.toUpperCase();
// 		this.props = props;
// 	}

// 	writing() {
// 		files(
// 			Object.assign(this.props, this.defaultConfig, this.config.getAll())
// 		).forEach(file => {
// 			this.fs.copyTpl(
// 				this.templatePath(file.from),
// 				this.destinationPath(file.to),
// 				this.props
// 			);
// 		});
// 	}
// };
