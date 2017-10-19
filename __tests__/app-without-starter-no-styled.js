"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var mainConfig = require("../test-configs/main").app();
var textHelpers = require("../helpers/text");

describe("generator-react-16-boilerplate:app without starter content", () => {
	var packageJson;
	beforeAll(() => {
		return helpers
			.run(path.join(__dirname, "../generators/app"))
			.withPrompts({
				projectName: mainConfig.projectName,
				projectDescription: mainConfig.projectDescription,
				projectKeywords: mainConfig.projectKeywords,
				devName: mainConfig.projectDev,
				styledComponents: false,
				starterData: false
			})
			.then(dir => {
				packageJson = JSON.parse(textHelpers.readCreatedFile(dir, "./package.json"));
			});
	});

	it("doesn't create folders", () => {
		assert.noFile([mainConfig.withContentFolders]);
	});

	it("doesn't put styled-components in dependencies", () => {
		assert.equal(Boolean(packageJson.dependencies["styled-components"]), false);
	});
});
