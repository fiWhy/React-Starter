"use strict";
var path = require("path");
var assert = require("yeoman-assert");
var helpers = require("yeoman-test");
var contentHelpers = require("../test-configs/content");
var textHelpers = require("../helpers/text");
var mainConfig = require("../test-configs/main").app();

describe("generator-react-16-boilerplate:app with starter content but without styled", () => {
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
				styledComponents: false,
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

	it("creates files", () => {
		assert.file(mainConfig.withContentFiles);
	});

	it("doesn't put styled-components in dependencies", () => {
		assert.equal(Boolean(packageJson.dependencies["styled-components"]), false);
	});

	it("generates presentation for dashboard with styled-components", () => {
		var presentationContent = presentationTemplate(false, "Dashboard");
		assert.equal(dashboardPresentationContent, removeSpaces(presentationContent));
	});

	it("generates presentation for home with styled-components", () => {
		var presentationContent = presentationTemplate(false, "Home");
		assert.equal(homePresentationContent, removeSpaces(presentationContent));
	});
});
