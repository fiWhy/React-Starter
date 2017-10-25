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

const folderPath = input => {
	const indexOfSlash = standardSlash(input).lastIndexOf("/");
	return indexOfSlash > 0 ? input.slice(0, indexOfSlash) : "";
};

const readCreatedFile = function(dir, pathToFile) {
	return fs.readFileSync(path.join(dir, pathToFile)).toString();
};

const removeSpaces = function(string) {
	return string.replace(/\s/g, "");
};

const toCamelCase = function(string) {
	return string.slice(0, 1).toLowerCase() + nameToUpper(string.slice(1, string.length));
};

const toDashCase = function(string) {
	return (
		string.slice(0, 1).toLowerCase() +
		string.slice(1, string.length).replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)
	);
};

const genComponentName = name => {
	const genName = name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
	return genName;
};

const componentNamePreparation = component => {
	const setted = nameFromPath(component);
	const dashed = toDashCase(setted);
	const upperCamel = genComponentName(setted);
	const upper = setted.toUpperCase();
	const camel = toCamelCase(setted);

	return {
		setted,
		dashed,
		upperCamel,
		upper,
		camel
	};
};

module.exports.componentNamePreparation = componentNamePreparation;

module.exports.standardSlash = standardSlash;

module.exports.nameFromPath = nameFromPath;

module.exports.folderPath = folderPath;

module.exports.readCreatedFile = readCreatedFile;

module.exports.removeSpaces = removeSpaces;

module.exports.toCamelCase = toCamelCase;

module.exports.toUpper = nameToUpper;

module.exports.toDashCase = toDashCase;

module.exports.genComponentName = genComponentName;
