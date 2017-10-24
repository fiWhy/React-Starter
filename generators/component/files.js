const { detectPath } = require("../../helpers/folders");

module.exports = function({
	componentNameLower,
	options,
	componentFullPath,
	sourceRoot,
	reducerDashed,
	actionDashed
}) {
	const componentSrcPath = "component";
	const componentDistPath = detectPath(sourceRoot, `${componentFullPath}/`);
	let mainFiles = [
		{ from: `${componentSrcPath}/index.yo.ejs`, to: `${componentDistPath}/index.tsx` },
		{
			from: `${componentSrcPath}/index.test.yo.ejs`,
			to: `${componentDistPath}/index.test.tsx`
		},
		{
			from: `${componentSrcPath}/presentations/component-presentation.yo.ejs`,
			to: `${componentDistPath}/presentations/${componentNameLower}.presentation.tsx`
		},
		{
			from: `${componentSrcPath}/presentations/component-presentation.test.yo.ejs`,
			to: `${componentDistPath}/presentations/${componentNameLower}.presentation.test.tsx`
		}
	];

	if (options.route !== undefined) {
		mainFiles = mainFiles.concat([
			{
				from: `${componentSrcPath}/providers/route.provider.yo.ejs`,
				to: `${componentDistPath}/providers/route.provider.ts`
			}
		]);
	}

	if (options.action !== undefined) {
		mainFiles = mainFiles.concat([
			{
				from: `${componentSrcPath}/actions/data.action.yo.ejs`,
				to: `${componentDistPath}/actions/${actionDashed}.action.ts`
			}
		]);
	}

	if (options.reducer !== undefined) {
		mainFiles = mainFiles.concat([
			{
				from: `${componentSrcPath}/reducers/data.reducer.yo.ejs`,
				to: `${componentDistPath}/reducers/${reducerDashed}.reducer.ts`
			},

			{
				from: `${componentSrcPath}/providers/reducer.provider.yo.ejs`,
				to: `${componentDistPath}/providers/reducer.provider.ts`
			}
		]);
	}

	return mainFiles;
};
