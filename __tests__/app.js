"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var contentHelpers = require("../test-configs/content");
var textHelpers = require("../helpers/text");
var mainConfig = require("../test-configs/main").app();

describe("generator-react-16-boilerplate:app", () => {
	var dashboardPresentationContent;
	var homePresentationContent;
	var packageJson;
	var { readCreatedFile, removeSpaces } = textHelpers;
	var { presentationTemplate } = contentHelpers;

	beforeAll(() => {
		return helpers
			.run(path.join(__dirname, "../generators/app"))
			.withPrompts({
				projectName: mainConfig.projectName,
				projectDescription: mainConfig.projectDescription,
				projectKeywords: mainConfig.projectKeywords,
				devName: mainConfig.projectDev,
				styledComponents: true,
				starterData: true
			})
			.then(dir => {
				dashboardPresentationContent = removeSpaces(
					readCreatedFile(dir, "./src/components/dashboard/presentations/dashboard.tsx")
				);
				homePresentationContent = removeSpaces(
					readCreatedFile(dir, "./src/components/home/presentations/home.tsx")
				);
				packageJson = JSON.parse(readCreatedFile(dir, "./package.json"));
			});
	});

	it("creates additional files", () => {
		assert.file(mainConfig.withAdditionalFiles);
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
