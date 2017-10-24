"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var foldersHelpers = require("../helpers/folders");
var textHelpers = require("../helpers/text");
var mainConfig = require("../config/main");
var testConfig = require("../config/for-test");

const createComponent = componentName => {
	const { sourceRoot } = mainConfig();
	const { readCreatedFile, removeSpaces } = textHelpers;
	const componentPath = foldersHelpers.detectPath(sourceRoot, componentName);
	const config = testConfig.component(componentName);

	return helpers
		.run(path.join(__dirname, "../generators/component"))
		.withArguments([componentName])
		.then(dir => {
			const content = removeSpaces(
				readCreatedFile(
					dir,
					`${componentPath}/${config.componentDashed}/presentations/${config.componentDashed}.presentation.tsx`
				)
			);
			return { content, config };
		});
};

describe("generator-react-16-boilerplate:component", () => {
	var { presentationTemplate } = testConfig;
	let presentationContentFromRoot;
	let componentConfigFromRoot;
	const componentNameFromRoot = "./components/testComponent";
	const componentNameFromCurrent = "./currentTestComponent";
	const { removeSpaces } = textHelpers;
	beforeAll(() => {
		return createComponent(componentNameFromRoot).then(({ content, config }) => {
			presentationContentFromRoot = content;
			componentConfigFromRoot = config;
		});
	});

	it("creates files with request from root", () => {
		const { contentFiles } = componentConfigFromRoot;
		assert.file(contentFiles);
	});

	it("creates files with request from current folder", done => {
		createComponent(componentNameFromCurrent).then(({ config }) => {
			const { contentFiles } = config;
			assert.file(contentFiles);
			done();
		});
	});

	it("generates presentation for component", () => {
		const { upperComponentName } = componentConfigFromRoot;
		var presentationContent = presentationTemplate(true, upperComponentName);
		assert.equal(presentationContentFromRoot, removeSpaces(presentationContent));
	});
});
