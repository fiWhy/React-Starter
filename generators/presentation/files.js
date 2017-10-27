const { detectPath } = require("../../helpers/folders");
const mainConfig = require("../../config/main");

module.exports = function({ dashed, fullPath }) {
	const { sourceRoot } = mainConfig();
	const componentDistPath = detectPath(sourceRoot, fullPath, "");
	let mainFiles = [
		{
			from: `component-presentation.yo.ejs`,
			to: `${componentDistPath}/${dashed}.presentation.tsx`
		},
		{
			from: `component-presentation.test.yo.ejs`,
			to: `${componentDistPath}/${dashed}.presentation.test.tsx`
		}
	];

	return mainFiles;
};
