var fs = require("fs");
var path = require("path");

module.exports.readCreatedFile = function(dir, pathToFile) {
	return fs.readFileSync(path.join(dir, pathToFile)).toString();
};

module.exports.removeSpaces = function(string) {
	return string.replace(/\s/g, "");
};

module.exports.toDashCase = function(string) {
	return string.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);
};
