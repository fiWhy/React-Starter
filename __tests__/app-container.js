"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var testConfig = require("../config/for-test");

const createComponent = (componentName, options = {}) => {
	const config = testConfig.component({ component: componentName, options });
	return helpers
		.run(path.join(__dirname, "../generators/container"))
		.withArguments([componentName])
		.withOptions(options)
		.then(() => {
			return config;
		});
};

describe("generator-react-16-boilerplate:component", () => {
	let componentConfigFromRoot;
	const componentNameFromRoot = "./components/testComponent";
	const componentNameForAdditionalData = "./components/withAdditionalData";
	const componentNameWithoutFolder = "testComponentWithoutFolder";
	const componentNameFromCurrent = "./currentTestComponent";
	beforeAll(() => {
		return createComponent(componentNameFromRoot).then(config => {
			componentConfigFromRoot = config;
		});
	});

	it("creates files with request from root", () => {
		const { contentFiles } = componentConfigFromRoot;
		assert.file(contentFiles);
	});

	it("creates additional files", done => {
		createComponent(componentNameForAdditionalData, {
			route: "/test",
			action: "test",
			reducer: "test"
		}).then(config => {
			const { contentFiles } = config;
			assert.file(contentFiles);
			done();
		});
	});

	it("creates additional files with boolean options", done => {
		createComponent(componentNameForAdditionalData, {
			route: true,
			action: true,
			reducer: true
		}).then(config => {
			const { componentPath } = config;
			const noFiles = [
				`${componentPath}/actions/true.action.tsx`,
				`${componentPath}/reducers/true.reducer.tsx`
			];
			assert.noFile(noFiles);
			done();
		});
	});

	it("creates files with request from current folder", done => {
		createComponent(componentNameFromCurrent).then(config => {
			const { contentFiles } = config;
			assert.file(contentFiles);
			done();
		});
	});

	it("creates files with request without folder", done => {
		createComponent(componentNameWithoutFolder).then(config => {
			const { contentFiles } = config;
			assert.file(contentFiles);
			done();
		});
	});
});
