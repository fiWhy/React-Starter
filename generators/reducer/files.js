const { detectPath } = require("../../helpers/folders");
const mainConfig = require("../../config/main");

module.exports = function({ dashed, fullPath }) {
	const { sourceRoot } = mainConfig();
	const componentDistPath = detectPath(sourceRoot, fullPath, "");
	let mainFiles = [
		{
			from: `reducer.yo.ejs`,
			to: `${componentDistPath}/${dashed}.reducer.ts`
		}
	];

	return mainFiles;
};
