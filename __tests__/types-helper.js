const typesHelper = require("../helpers/types");

describe("folders helper", () => {
	const { isBoolean, isBooleanName } = typesHelper;

	it("isBoolean should return boolean answer is input boolean", () => {
		expect(isBoolean(false)).toBe(true);
	});

	it("isBooleanName should return boolean answer is input boolean even its a string", () => {
		expect(isBooleanName("false")).toBe(true);
	});
});
