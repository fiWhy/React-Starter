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

	if (options.reducer && !isBooleanName(options.reducer)) {
		contentFiles = contentFiles.concat([
			`${componentPath}/providers/reducer.provider.ts`
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

module.exports.action = action => {
	const { sourceRoot } = mainConfig();
	let preparations = textHelpers.componentNamePreparation(action);
	const { dashed, fullPath } = preparations;
	const actionPath = foldersConfig.detectPath(sourceRoot, fullPath);
	let contentFiles = [`${actionPath}${dashed}.action.ts`];

	return Object.assign(
		{
			contentFiles
		},
		preparations
	);
};

module.exports.actionTemplate = function(action, isAsync = false) {
	const actionName = `${action}Action`;
	if (isAsync) {
		return `import { createActionAsync } from "redux-act-async"; 
		export const ${actionName} = createActionAsync("${actionName}", () =>{
			return Promise.resolve("${actionName}");
		});`;
	}
	return `import { createAction } from "redux-act"; 
		export const ${actionName} = createAction("${actionName}");`;
};

module.exports.reducer = reducer => {
	const { sourceRoot } = mainConfig();
	let preparations = textHelpers.componentNamePreparation(reducer);
	const { dashed, fullPath } = preparations;
	const reducerPath = foldersConfig.detectPath(sourceRoot, fullPath);
	let contentFiles = [`${reducerPath}${dashed}.reducer.ts`];

	return Object.assign(
		{
			contentFiles
		},
		preparations
	);
};

module.exports.reducerTemplate = function(
	reducer,
	action = null,
	actionName = null,
	isAsync = false
) {
	const reducerName = `${reducer}Reducer`;
	if (action) {
		if (isAsync) {
			return `import { ${actionName} } from "${action}";
			import { createReducerAsync } from "redux-act-async";
			export const ${reducerName} = createReducerAsync(${actionName});`;
		}
		return `import { ${actionName} } from "${action}";
			import { createReducer } from "redux-act";
			export const ${reducerName} = createReducer(${actionName});`;
	}
	return `export const ${reducerName} = (state =  [], action) => { return state; };`;
};
