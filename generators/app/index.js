'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const files = require("./files");
const prompts = require("./prompts");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.appname = "React boilerplate";
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to react16 generator!'
    ));

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  conformProps() {
    const { projectKeywords } = this.props;
    console.log(projectKeywords);
    this.props.projectKeywords = projectKeywords ?
      projectKeywords.split(",") :
      [];
  }

  writing() {
    console.log("writing");
    files(this.props).forEach((file) => {
      this.fs.copyTpl(
        this.templatePath(file.from),
        this.destinationPath(file.to),
        this.props
      );
    })
  }

  install() {
    this.installDependencies();
  }
};
