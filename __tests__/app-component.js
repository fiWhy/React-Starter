"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var textHelpers = require("../helpers/text");
var contentHelpers = require("../test-configs/content");
var mainConfig = require("../test-configs/main");

describe("generator-react-16-boilerplate:component", () => {
	// Var { readCreatedFile, removeSpaces, presentationTemplate } = contentHelpers;
	let genPresentationContent;
	const componentName = "testComponent";
	const { removeSpaces, readCreatedFile } = textHelpers;
	const { contentFiles, componentDashed, upperComponentName } = mainConfig.component(
		componentName
	);
	beforeAll(() => {
		return helpers
			.run(path.join(__dirname, "../generators/component"))
			.withOptions({
				componentName
			})
			.then(dir => {
				genPresentationContent = removeSpaces(
					readCreatedFile(
						dir,
						`./src/components/${componentDashed}/presentations/${componentDashed}.presentation.tsx`
					)
				);
			});
	});

	it("creates files", () => {
		assert.file(contentFiles);
	});

	it("generates presentation for component", () => {
		var presentationContent = contentHelpers.presentationTemplate(
			true,
			upperComponentName
		);
		assert.equal(genPresentationContent, removeSpaces(presentationContent));
	});
});
