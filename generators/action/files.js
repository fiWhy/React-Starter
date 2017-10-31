const { detectPath } = require("../../helpers/folders");
const mainConfig = require("../../config/main");

module.exports = function({ dashed, fullPath }) {
	const { sourceRoot } = mainConfig();
	const componentDistPath = detectPath(sourceRoot, fullPath, "");
	let mainFiles = [
		{
			from: `action.yo.ejs`,
			to: `${componentDistPath}/${dashed}.action.ts`
		}
	];

	return mainFiles;
};
