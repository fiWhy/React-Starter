var fs = require("fs");
var path = require("path");

function nameToUpper(string) {
	return string.replace(/(-[A-Z])/g, g => `${g[1].toUpperCase()}`);
}

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
