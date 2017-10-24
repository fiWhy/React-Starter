const { folderPath } = require("./text");
const { join } = require("path");

module.exports.detectPath = (base, input) => {
	const folder = folderPath(input);
	const cwd = process.cwd();
	const lastIndexOfBase = cwd.lastIndexOf(base);
	const stdCwd = lastIndexOfBase > -1 ? cwd.slice(lastIndexOfBase) : base;
	return folder[0] === "." ? join(stdCwd, folder) : join(base, folder);
};
