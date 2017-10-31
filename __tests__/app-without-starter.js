"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var mainConfig = require("../config/main");
var testConfig = require("../config/for-test").app();

describe("generator-react-skeleton:app without starter content", () => {
	const { sourceRoot } = mainConfig();
	beforeAll(() => {
		return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
			projectName: testConfig.projectName,
			projectDescription: testConfig.projectDescription,
			projectKeywords: testConfig.projectKeywords,
			devName: testConfig.projectDev,
			styledComponents: false,
			starterData: false,
			sourceRoot
		});
	});

	it("doesn't create folders", () => {
		assert.noFile([testConfig.withContentFolders]);
	});
});
