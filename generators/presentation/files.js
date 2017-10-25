const { detectPath } = require("../../helpers/folders");
const { folderPath } = require("../../helpers/text");
const mainConfig = require("../../config/main");

module.exports = function({ componentNameLower }) {
	const { sourceRoot } = mainConfig();
	const componentDistPath = detectPath(
		sourceRoot,
		`${folderPath(componentNameLower)}`,
		""
	);
	let mainFiles = [
		{
			from: `component-presentation.yo.ejs`,
			to: `${componentDistPath}/${componentNameLower}.presentation.tsx`
		},
		{
			from: `component-presentation.test.yo.ejs`,
			to: `${componentDistPath}/${componentNameLower}.presentation.test.tsx`
		}
	];

	return mainFiles;
};
