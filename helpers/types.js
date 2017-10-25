const isBoolean = input => {
	return typeof input === "boolean";
};

module.exports.isBoolean = isBoolean;

module.exports.isBooleanName = input => {
	return isBoolean(input) || input === "true" || input === "false";
};
