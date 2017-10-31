"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var testConfig = require("../config/for-test");

const createComponent = (component, options = []) => {
	const config = testConfig.component({ component, options });
	return helpers
		.run(path.join(__dirname, "../generators/container"))
		.withArguments([component])
		.withOptions(options)
		.then(() => {
			return config;
		});
};

describe("generator-react-skeleton:container", () => {
	const componentNameFromRoot = "./components/testComponent";
	const componentNameForAdditionalData = "./components/withAdditionalData";
	const componentNameForAdditionalDataNoOptions =
		"./components/withAdditionalDataNoOptions";
	const componentNameWithoutFolder = "testComponentWithoutFolder";
	const componentNameFromCurrent = "./currentTestComponent";

	it("creates files with request from root", done => {
		createComponent(componentNameFromRoot).then(config => {
			const { contentFiles } = config;
			assert.file(contentFiles);
			done();
		});
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
		createComponent(componentNameForAdditionalDataNoOptions, {
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
