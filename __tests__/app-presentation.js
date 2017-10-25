"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var foldersHelpers = require("../helpers/folders");
var textHelpers = require("../helpers/text");
var mainConfig = require("../config/main");
var testConfig = require("../config/for-test");

describe("generator-react-16-boilerplate:presentation", () => {
	const component = "./data";
	const config = testConfig.component({ component });
	const { sourceRoot } = mainConfig();
	const { readCreatedFile, removeSpaces } = textHelpers;
	const componentPath = foldersHelpers.detectPath(sourceRoot, component);
	let presentationCreatedContent;

	beforeAll(() => {
		return helpers
			.run(path.join(__dirname, "../generators/presentation"))
			.withArguments([component])
			.then(dir => {
				presentationCreatedContent = removeSpaces(
					readCreatedFile(
						dir,
						`${componentPath}/${config.componentDashed}/presentations/${config.componentDashed}.presentation.tsx`
					)
				);
			});
	});

	it("creates files", () => {
		const { contentFiles } = config;
		assert.file(contentFiles);
	});

	it("creates file with right content", () => {
		const { upperComponentName } = config;
		const { presentationTemplate } = testConfig;

		var presentationContent = presentationTemplate(true, upperComponentName);
		assert.equal(presentationCreatedContent, removeSpaces(presentationContent));
	});
});
