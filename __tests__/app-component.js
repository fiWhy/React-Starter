"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
// Var contentHelpers = require("../test-configs/content");
// var mainConfig = require("../test-configs/main")();

describe("generator-react-16-boilerplate:component", () => {
	// Var { readCreatedFile, removeSpaces, presentationTemplate } = contentHelpers;

	beforeAll(() => {
		return helpers
			.run(path.join(__dirname, "../generators/component"))
			.withPrompts({
				componentName: "testComponent"
			})
			.withOptions({});
	});

	it("shows true", () => {
		assert.equal(1, true);
	});
});
