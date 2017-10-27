const { detectPath } = require("../../helpers/folders");

module.exports = function({ component, action, reducer, route, sourceRoot }) {
	const componentDistPath = `${detectPath(
		sourceRoot,
		component.fullPath
	)}/${component.dashed}`;
	let mainFiles = [
		{ from: "index.yo.ejs", to: `${componentDistPath}/index.tsx` },
		{
			from: "index.test.yo.ejs",
			to: `${componentDistPath}/index.test.tsx`
		}
	];
	if (route) {
		mainFiles = mainFiles.concat([
			{
				from: "providers/route.provider.yo.ejs",
				to: `${componentDistPath}/providers/route.provider.ts`
			}
		]);
	}

	if (action) {
		mainFiles = mainFiles.concat([
			{
				from: "actions/data.action.yo.ejs",
				to: `${componentDistPath}/actions/${action.dashed}.action.ts`
			}
		]);
	}

	if (reducer) {
		mainFiles = mainFiles.concat([
			{
				from: "reducers/data.reducer.yo.ejs",
				to: `${componentDistPath}/reducers/${reducer.dashed}.reducer.ts`
			},

			{
				from: "providers/reducer.provider.yo.ejs",
				to: `${componentDistPath}/providers/reducer.provider.ts`
			}
		]);
	}
	return mainFiles;
};
