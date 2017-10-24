const textHelpers = require("../helpers/text");
const foldersConfig = require("../helpers/folders");
const mainConfig = require("./main");
const app = () => {
	const { sourceRoot } = mainConfig();
	return {
		projectName: "Test React, Typescript, Webpack",
		projectKeywords: "Raccoon",
		projectDescription: "Hello there, Raccoon!",
		projectDev: "Raccoon",
		contentFiles: [
			`${sourceRoot}/components/dashboard/presentations/dashboard.presentation.tsx`,
			`${sourceRoot}/components/home/presentations/home.presentation.tsx`
		],

		withAdditionalFiles: ["package.json", ".gitignore", "tsconfig.json"],
		withContentFolders: [
			`${sourceRoot}/components/dashboard`,
			`${sourceRoot}/components/home`
		]
	};
};

module.exports.app = app;

module.exports.component = function(component) {
	const { sourceRoot } = mainConfig();
	const componentName = textHelpers.nameFromPath(component);
	const dashedComponentName = textHelpers.toDashCase(componentName);
	const genCmpName = textHelpers.genComponentName(componentName);
	const componentPath = `${foldersConfig.detectPath(
		sourceRoot,
		component
	)}/${dashedComponentName}`;
	return {
		componentName: componentName,
		upperComponentName: genCmpName,
		componentDashed: dashedComponentName,
		contentFiles: [
			`${componentPath}/presentations/${dashedComponentName}.presentation.tsx`,
			`${componentPath}/actions/data.action.ts`,
			`${componentPath}/providers/reducer.provider.ts`,
			`${componentPath}/providers/route.provider.ts`,
			`${componentPath}/reducers/data.reducer.ts`,
			`${componentPath}/constants.ts`,
			`${componentPath}/index.tsx`
		]
	};
};

module.exports.presentationTemplate = function(withStyledComponents, component) {
	return `import * as React from "react";
    import { Link } from "react-router-dom";
    
    const ${component}Presentation = () => (
          <div>
            <h2>${component}</h2>
            <div>
              ${component} works!
            </div>
          </div>
    );
    
    export default ${component}Presentation;
    `;
};
