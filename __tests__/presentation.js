"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var textHelpers = require("../helpers/text");
var mainConfig = require("../config/main");
var testConfig = require("../config/for-test");

describe("generator-react-skeleton:presentation", () => {
	const component = "./data";
	const { contentFiles, upperCamel, dashed } = testConfig.presentation(component);
	const { sourceRoot } = mainConfig();
	const { readCreatedFile, removeSpaces } = textHelpers;
	let presentationCreatedContent;
	beforeAll(() => {
		return helpers
			.run(path.join(__dirname, "../generators/presentation"))
			.withArguments([component])
			.then(dir => {
				presentationCreatedContent = removeSpaces(
					readCreatedFile(dir, `${sourceRoot}/${dashed}.presentation.tsx`)
				);
			});
	});

	it("creates files", () => {
		assert.file(contentFiles);
	});

	it("creates file with right content", () => {
		const { presentationTemplate } = testConfig;

		var presentationContent = presentationTemplate(true, upperCamel);
		assert.equal(presentationCreatedContent, removeSpaces(presentationContent));
	});
});
