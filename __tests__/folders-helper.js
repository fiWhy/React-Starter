const foldersHelpers = require("../helpers/folders");

describe("folders helper", () => {
	const base = "__tests__";
	const folder = "a/b/c";
	const prediction = `${base}/a/b`;
	const currentFolder = `./${folder}`;
	const backSlashFolder = `/${folder}`;
	const currentSlim = "./a";
	const { detectPath, countFoldersFromRoot } = foldersHelpers;

	it("detectPath should return path from current folder", () => {
		expect(detectPath(base, currentFolder)).toBe(prediction);
	});

	it("detectPath should return path from backSlashFolder folder", () => {
		expect(detectPath(base, backSlashFolder)).toBe(prediction);
	});

	it("detectPath should return path from base folder", () => {
		expect(detectPath(base, folder)).toBe(prediction);
	});

	it("countFoldersFromRoot should return count of ticks of path", () => {
		expect(countFoldersFromRoot(base, folder)).toBe(2);
	});

	it("countFoldersFromRoot should return 0 of ticks of path from current folder", () => {
		expect(countFoldersFromRoot(base, currentSlim)).toBe(0);
	});
});
