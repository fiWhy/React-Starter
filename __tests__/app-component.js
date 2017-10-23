"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var textHelpers = require("../helpers/text");
var mainConfig = require("../config/main");
var testConfig = require("../config/for-test");

describe("generator-react-16-boilerplate:component", () => {
	// Var { readCreatedFile, removeSpaces, presentationTemplate } = testConfig;
	let genPresentationContent;
	const componentName = "components/testComponent";
	const { removeSpaces, readCreatedFile, nameFromPath } = textHelpers;
	const { sourceRoot } = mainConfig();
	const { contentFiles, componentDashed, upperComponentName } = testConfig.component(
		nameFromPath(componentName)
	);
	beforeAll(() => {
		return helpers
			.run(path.join(__dirname, "../generators/component"))
			.withArguments([componentName])
			.then(dir => {
				genPresentationContent = removeSpaces(
					readCreatedFile(
						dir,
						`./${sourceRoot}/components/${componentDashed}/presentations/${componentDashed}.presentation.tsx`
					)
				);
			});
	});

	it("creates files", () => {
		assert.file(contentFiles);
	});

	it("generates presentation for component", () => {
		var presentationContent = testConfig.presentationTemplate(true, upperComponentName);
		assert.equal(genPresentationContent, removeSpaces(presentationContent));
	});
});
