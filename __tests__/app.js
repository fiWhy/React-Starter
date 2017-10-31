"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");
const mainConfig = require("../config/main");
const testConfig = require("../config/for-test");
const textHelpers = require("../helpers/text");

describe("generator-react-skeleton:app", () => {
	let packageJson;
	const { sourceRoot } = mainConfig();
	const { readCreatedFile } = textHelpers;
	const {
		projectName,
		projectDescription,
		projectKeywords,
		projectDev,
		withAdditionalFiles
	} = testConfig.app();

	beforeAll(() => {
		return helpers
			.run(path.join(__dirname, "../generators/app"))
			.withPrompts({
				projectName: projectName,
				projectDescription: projectDescription,
				projectKeywords: projectKeywords,
				devName: projectDev,
				styledComponents: true,
				starterData: true,
				sourceRoot
			})
			.then(dir => {
				packageJson = JSON.parse(readCreatedFile(dir, "./package.json"));
			});
	});

	it("creates additional files", () => {
		assert.file(withAdditionalFiles);
	});

	it("puts styled-components in dependencies", () => {
		assert.equal(Boolean(packageJson.dependencies["styled-components"]), true);
	});
});
