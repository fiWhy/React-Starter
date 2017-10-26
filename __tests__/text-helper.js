const textHelpers = require("../helpers/text");

describe("text helpers", () => {
	const component = "a-b-c-d ";
	const { genComponentName, removeSpaces, dashToUpper } = textHelpers;

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
});
