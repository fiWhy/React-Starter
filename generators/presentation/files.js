const { detectPath } = require("../../helpers/folders");
const { folderPath } = require("../../helpers/text");
const mainConfig = require("../../config/main");

module.exports = function({ dash }) {
	const { sourceRoot } = mainConfig();
	const componentDistPath = detectPath(sourceRoot, `${folderPath(dash)}`, "");
	let mainFiles = [
		{
			from: `component-presentation.yo.ejs`,
			to: `${componentDistPath}/${dash}.presentation.tsx`
		},
		{
			from: `component-presentation.test.yo.ejs`,
			to: `${componentDistPath}/${dash}.presentation.test.tsx`
		}
	];

	return mainFiles;
};
