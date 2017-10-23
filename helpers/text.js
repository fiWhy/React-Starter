var fs = require("fs");
var path = require("path");

const nameToUpper = string => {
	return string.replace(/(-[A-Z])/g, g => `${g[1].toUpperCase()}`);
};
const standardSlash = input => {
	return input.replace(new RegExp(/\\/, "g"), "/");
};
const nameFromPath = input => {
	const indexOfSlash = standardSlash(input).lastIndexOf("/");
	return indexOfSlash >= 0 ? input.slice(indexOfSlash + 1) : input;
};

module.exports.standardSlash = standardSlash;

module.exports.nameFromPath = nameFromPath;

module.exports.folderPath = input => {
	const indexOfSlash = standardSlash(input).lastIndexOf("/");
	return indexOfSlash > 0 ? input.slice(0, indexOfSlash) : "";
};

module.exports.readCreatedFile = function(dir, pathToFile) {
	return fs.readFileSync(path.join(dir, pathToFile)).toString();
};

module.exports.removeSpaces = function(string) {
	return string.replace(/\s/g, "");
};

module.exports.toCamelCase = function(string) {
	return string.slice(0, 1).toLowerCase() + nameToUpper(string.slice(1, string.length));
};

module.exports.toUpper = nameToUpper;

module.exports.toDashCase = function(string) {
	return (
		string.slice(0, 1).toLowerCase() +
		string.slice(1, string.length).replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)
	);
};

module.exports.genComponentName = name => {
	const genName = name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
	return genName;
};
