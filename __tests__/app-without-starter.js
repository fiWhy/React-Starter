"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var mainConfig = require("../test-configs/main").app();

describe("generator-react-16-boilerplate:app without starter content", () => {
	beforeAll(() => {
		return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
			projectName: mainConfig.projectName,
			projectDescription: mainConfig.projectDescription,
			projectKeywords: mainConfig.projectKeywords,
			devName: mainConfig.projectDev,
			styledComponents: false,
			starterData: false
		});
	});

	it("doesn't create folders", () => {
		assert.noFile([mainConfig.withContentFolders]);
	});
});
