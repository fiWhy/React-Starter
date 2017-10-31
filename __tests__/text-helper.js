const textHelpers = require("../helpers/text");

describe("text helpers", () => {
	const component = "a-b-c-d ";
	const {
		genComponentName,
		removeSpaces,
		dashToUpper,
		standardSlash,
		nameFromPath,
		folderPath,
		toCamelCase,
		toDashCase,
		componentNamePreparation
	} = textHelpers;

	it("genComponentName should make upper camel case", () => {
		const prediction = "ABCD";
		expect(genComponentName(component)).toBe(prediction);
	});

	it("removeSpaces should remove spaces", () => {
		const prediction = "a-b-c-d";
		expect(removeSpaces(component)).toBe(prediction);
	});

	it("dashToUpper should replace extra symbol -{letter} to upper case {letter}", () => {
		const prediction = "aBCD";
		expect(dashToUpper(component)).toBe(prediction);
	});

	it("standardSlash should replace wrong slashes", () => {
		const wrong = "a\\b\\c\\d";
		const right = "a/b/c/d";
		expect(standardSlash(wrong)).toBe(right);
	});

	it("nameFromPath should extract name from full path", () => {
		const path = "a/b/c/d/file";
		const file = "file";
		expect(nameFromPath(path)).toBe(file);
	});

	it("folderPath should extract path before file from full path", () => {
		const fullPath = "a/b/c/d/file";
		const folder = "a/b/c/d";
		expect(folderPath(fullPath)).toBe(folder);
	});

	it("toCamelCase should make camel case from dash case", () => {
		const prediction = "aBCD";
		expect(toCamelCase(component)).toBe(prediction);
	});

	it("toDashCase should dash case from camel case", () => {
		const from = "aBCD";
		expect(toDashCase(from)).toBe(removeSpaces(component));
	});

	it("componentNamePreparation should extend all variants of component name mutation", () => {
		const from = "./path/to/componentName";
		const prediction = {
			fullPath: "./path/to/component-name",
			path: from,
			folder: "./path/to",
			name: "componentName",
			dashed: "component-name",
			upperCamel: "ComponentName",
			upper: "COMPONENTNAME",
			camel: "componentName"
		};
		expect(componentNamePreparation(from)).toEqual(prediction);
	});
});
