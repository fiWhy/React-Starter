const { detectPath } = require("../../helpers/folders");

module.exports = function({ componentNameLower, sourceRoot }) {
	const componentSrcPath = "component";
	const componentDistPath = detectPath(sourceRoot, `${componentNameLower}/`);
	let mainFiles = [
		{
			from: `${componentSrcPath}/component-presentation.yo.tpl`,
			to: `${componentDistPath}/${componentNameLower}.presentation.tsx`
		},
		{
			from: `${componentSrcPath}/component-presentation.test.yo.tpl`,
			to: `${componentDistPath}/${componentNameLower}.presentation.test.tsx`
		}
	];

	return mainFiles;
};
