const textHelpers = require("../helpers/text");

module.exports.app = function() {
	return {
		projectName: "Test React, Typescript, Webpack",
		projectKeywords: "Raccoon",
		projectDescription: "Hello there, Raccoon!",
		projectDev: "Raccoon",

		contentFiles: [
			"src/components/dashboard/presentations/dashboard.presentation.tsx",
			"src/components/home/presentations/home.presentation.tsx"
		],

		withAdditionalFiles: ["package.json", ".gitignore", "tsconfig.json"],
		withContentFolders: ["src/components/dashboard", "src/components/home"]
	};
};

module.exports.component = function(componentName) {
	const dashedComponentName = textHelpers.toDashCase(componentName);
	const genCmpName = textHelpers.genComponentName(componentName);
	return {
		componentName: componentName,
		upperComponentName: genCmpName,
		componentDashed: dashedComponentName,
		contentFiles: [
			`src/components/${dashedComponentName}/presentations/${dashedComponentName}.presentation.tsx`,
			`src/components/${dashedComponentName}/actions/data.action.tsx`,
			`src/components/${dashedComponentName}/providers/reducer.provider.tsx`,
			`src/components/${dashedComponentName}/providers/route.provider.tsx`,
			`src/components/${dashedComponentName}/reducers/data.reducer.tsx`,
			`src/components/${dashedComponentName}/constants.tsx`,
			`src/components/${dashedComponentName}/index.tsx`
		]
	};
};
