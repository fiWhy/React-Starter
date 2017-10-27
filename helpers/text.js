var fs = require("fs");
var path = require("path");

const removeSpaces = input => {
	return input.replace(/\s/g, "");
};

const dashToUpper = input => {
	return removeSpaces(input).replace(/(-[A-Za-z0-9])/g, g => `${g[1].toUpperCase()}`);
};

const standardSlash = input => {
	return input ? input.replace(new RegExp(/\\/, "g"), "/") : "";
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

const toCamelCase = function(string) {
	return string.slice(0, 1).toLowerCase() + dashToUpper(string.slice(1, string.length));
};

const toDashCase = function(string) {
	return (
		string.slice(0, 1).toLowerCase() +
		string.slice(1, string.length).replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)
	);
};

const genComponentName = name => {
	let camelCase = toCamelCase(name);
	return camelCase.slice(0, 1).toUpperCase() + camelCase.slice(1);
};

const componentNamePreparation = component => {
	const path = component;
	const name = nameFromPath(component);
	const folder = folderPath(path);
	const dashed = toDashCase(name);
	const upperCamel = genComponentName(name);
	const upper = name.toUpperCase();
	const camel = toCamelCase(name);
	const fullPath = `${folder}/${dashed}`;

	return {
		fullPath,
		path,
		folder,
		name,
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

module.exports.dashToUpper = dashToUpper;

module.exports.toDashCase = toDashCase;

module.exports.genComponentName = genComponentName;
