"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var textHelpers = require("../helpers/text");
var mainConfig = require("../config/main");
var testConfig = require("../config/for-test");

describe("generator-react-16-boilerplate:app", () => {
	var dashboardPresentationContent;
	var homePresentationContent;
	var packageJson;
	var { readCreatedFile, removeSpaces } = textHelpers;
	const { sourceRoot } = mainConfig();
	const {
		projectName,
		projectDescription,
		projectKeywords,
		projectDev,
		withAdditionalFiles
	} = testConfig.app();

	const { presentationTemplate } = testConfig;
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
				dashboardPresentationContent = removeSpaces(
					readCreatedFile(
						dir,
						`./${sourceRoot}/components/dashboard/presentations/dashboard.presentation.tsx`
					)
				);
				homePresentationContent = removeSpaces(
					readCreatedFile(
						dir,
						`./${sourceRoot}/components/home/presentations/home.presentation.tsx`
					)
				);
				packageJson = JSON.parse(readCreatedFile(dir, "./package.json"));
			});
	});

	it("creates additional files", () => {
		assert.file(withAdditionalFiles);
	});

	it("puts styled-components in dependencies", () => {
		assert.equal(Boolean(packageJson.dependencies["styled-components"]), true);
	});

	it("generates presentation for dashboard with styled-components", () => {
		var presentationContent = presentationTemplate(true, "Dashboard");
		assert.equal(dashboardPresentationContent, removeSpaces(presentationContent));
	});

	it("generates presentation for home with styled-components", () => {
		var presentationContent = presentationTemplate(true, "Home");
		assert.equal(homePresentationContent, removeSpaces(presentationContent));
	});
});
