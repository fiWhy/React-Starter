const textHelpers = require("../helpers/text");
const foldersConfig = require("../helpers/folders");
const { isBooleanName } = require("../helpers/types");
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

module.exports.component = function({ component, options = {} }) {
	const preparations = textHelpers.componentNamePreparation(component);
	const { sourceRoot } = mainConfig();
	const { dashed, fullPath } = preparations;

	const componentPath = `${foldersConfig.detectPath(sourceRoot, fullPath)}/${dashed}`;
	let contentFiles = [`${componentPath}/index.tsx`];

	if (options.route && !isBooleanName(options.route)) {
		contentFiles = contentFiles.concat([`${componentPath}/providers/route.provider.ts`]);
	}

	if (options.action && !isBooleanName(options.action)) {
		contentFiles = contentFiles.concat([
			`${componentPath}/actions/${options.action}.action.ts`
		]);
	}
	if (options.reducer && !isBooleanName(options.reducer)) {
		contentFiles = contentFiles.concat([
			`${componentPath}/providers/reducer.provider.ts`,
			`${componentPath}/reducers/${options.reducer}.reducer.ts`
		]);
	}

	return Object.assign(
		{
			contentFiles
		},
		preparations
	);
};

module.exports.presentation = component => {
	const { sourceRoot } = mainConfig();
	let preparations = textHelpers.componentNamePreparation(component);
	const { dashed, fullPath } = preparations;
	const componentPath = foldersConfig.detectPath(sourceRoot, fullPath);
	let contentFiles = [
		`${componentPath}/${dashed}.presentation.tsx`,
		`${componentPath}/${dashed}.presentation.test.tsx`
	];

	return Object.assign(
		{
			contentFiles
		},
		preparations
	);
};

module.exports.presentationTemplate = function(withStyledComponents, component) {
	return `import * as React from "react";
    
    const ${component}Presentation = () => (
          <div>${component} works!</div>
    );
    
    export default ${component}Presentation;
    `;
};
