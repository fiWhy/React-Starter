const { detectPath } = require("../../helpers/folders");

module.exports = function({
	componentNameLower,
	options,
	clearComponentName,
	sourceRoot,
	reducerDashed,
	actionDashed
}) {
	const componentSrcPath = "component";
	const componentDistPath = `${detectPath(
		sourceRoot,
		clearComponentName
	)}/${componentNameLower}`;
	let mainFiles = [
		{ from: `${componentSrcPath}/index.yo.ejs`, to: `${componentDistPath}/index.tsx` },
		{
			from: `${componentSrcPath}/index.test.yo.ejs`,
			to: `${componentDistPath}/index.test.tsx`
		}
	];
	if (options.route) {
		mainFiles = mainFiles.concat([
			{
				from: `${componentSrcPath}/providers/route.provider.yo.ejs`,
				to: `${componentDistPath}/providers/route.provider.ts`
			}
		]);
	}

	if (options.action) {
		mainFiles = mainFiles.concat([
			{
				from: `${componentSrcPath}/actions/data.action.yo.ejs`,
				to: `${componentDistPath}/actions/${actionDashed}.action.ts`
			}
		]);
	}

	if (options.reducer) {
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
