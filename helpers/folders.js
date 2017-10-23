const { standardSlash } = require("./text");
const { join } = require("path");

module.exports.detectPath = (base, input) => {
	const stdPath = standardSlash(input);
	const slashIndex = stdPath.lastIndexOf("/");
	const cwd = process.cwd();
	const lastIndexOfBase = cwd.lastIndexOf(base);
	const stdCwd = cwd.slice(lastIndexOfBase);
	console.log("INPUTMFK!", input);
	if (slashIndex !== -1) {
		const requestedPath = stdPath.slice(0, slashIndex);
		return input[0] === "." ? join(stdCwd, requestedPath) : join(base, requestedPath);
	}
	return base;
};
