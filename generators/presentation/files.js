const { detectPath } = require("../../helpers/folders");

module.exports = function({ componentNameLower, sourceRoot }) {
	const componentSrcPath = "component";
	const componentDistPath = detectPath(sourceRoot, `${componentNameLower}/`);
	let mainFiles = [
		{ from: `${componentSrcPath}/index.yo.tpl`, to: `${componentDistPath}/index.tsx` },
		{
			from: `${componentSrcPath}/index.test.yo.tpl`,
			to: `${componentDistPath}/index.test.tsx`
		},
		{
			from: `${componentSrcPath}/constants.yo.tpl`,
			to: `${componentDistPath}/constants.ts`
		},
		{
			from: `${componentSrcPath}/actions/data.action.yo.tpl`,
			to: `${componentDistPath}/actions/data.action.ts`
		},
		{
			from: `${componentSrcPath}/presentations/component-presentation.yo.tpl`,
			to: `${componentDistPath}/presentations/${componentNameLower}.presentation.tsx`
		},
		{
			from: `${componentSrcPath}/presentations/component-presentation.test.yo.tpl`,
			to: `${componentDistPath}/presentations/${componentNameLower}.presentation.test.tsx`
		},
		{
			from: `${componentSrcPath}/providers/reducer.provider.yo.tpl`,
			to: `${componentDistPath}/providers/reducer.provider.ts`
		},
		{
			from: `${componentSrcPath}/providers/route.provider.yo.tpl`,
			to: `${componentDistPath}/providers/route.provider.ts`
		},
		{
			from: `${componentSrcPath}/reducers/data.reducer.yo.tpl`,
			to: `${componentDistPath}/reducers/data.reducer.ts`
		}
	];

	return mainFiles;
};
