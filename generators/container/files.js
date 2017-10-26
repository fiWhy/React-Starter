const { detectPath } = require("../../helpers/folders");

module.exports = function({
	dashed,
	options,
	path,
	sourceRoot,
	reducerDashed,
	actionDashed
}) {
	const componentDistPath = `${detectPath(sourceRoot, path)}/${dashed}`;
	let mainFiles = [
		{ from: "index.yo.ejs", to: `${componentDistPath}/index.tsx` },
		{
			from: "index.test.yo.ejs",
			to: `${componentDistPath}/index.test.tsx`
		}
	];
	if (options.route) {
		mainFiles = mainFiles.concat([
			{
				from: "providers/route.provider.yo.ejs",
				to: `${componentDistPath}/providers/route.provider.ts`
			}
		]);
	}

	if (options.action) {
		mainFiles = mainFiles.concat([
			{
				from: "actions/data.action.yo.ejs",
				to: `${componentDistPath}/actions/${actionDashed}.action.ts`
			}
		]);
	}

	if (options.reducer) {
		mainFiles = mainFiles.concat([
			{
				from: "reducers/data.reducer.yo.ejs",
				to: `${componentDistPath}/reducers/${reducerDashed}.reducer.ts`
			},

			{
				from: "providers/reducer.provider.yo.ejs",
				to: `${componentDistPath}/providers/reducer.provider.ts`
			}
		]);
	}

	return mainFiles;
};
