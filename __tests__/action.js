"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var textHelpers = require("../helpers/text");
var mainConfig = require("../config/main");
var testConfig = require("../config/for-test");

const createAction = (action, options = {}) => {
	const config = testConfig.action(action, options.async);
	const { dashed } = config;
	const { removeSpaces, readCreatedFile } = textHelpers;
	const { sourceRoot } = mainConfig();
	return helpers
		.run(path.join(__dirname, "../generators/action"))
		.withArguments([action])
		.withOptions(options)
		.then(dir => {
			const content = removeSpaces(
				readCreatedFile(dir, `${sourceRoot}/${dashed}.action.ts`)
			);
			return { config, content };
		});
};

describe("generator-react-skeleton:action", () => {
	const action = "./data";
	const defaultActon = "dataTest";
	const { removeSpaces } = textHelpers;

	it("creates files", done => {
		createAction(defaultActon).then(({ config: { contentFiles } }) => {
			assert.file(contentFiles);
			done();
		});
	});

	it("creates file with right content", done => {
		const { actionTemplate } = testConfig;
		createAction(action, {
			async: false
		}).then(({ config, content }) => {
			const actionContent = removeSpaces(actionTemplate(config.upperCamel));
			assert.equal(actionContent, content);
			done();
		});
	});
});
