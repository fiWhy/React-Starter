module.exports = function({ styledComponents, sourceRoot }) {
	let mainFiles = [
		{ from: "_tsconfig.json", to: "tsconfig.json" },
		{ from: "package.json.yo.tpl", to: "package.json" },
		{ from: "_gitignore", to: ".gitignore" },
		{ from: "helpers/*.js", to: "helpers" },
		{ from: "tasks/*.js", to: "tasks" },
		{ from: "custom-typings/*.ts", to: "custom-typings" },

		/** Config files */
		{ from: "config/loaders.yo.tpl", to: "config/loaders.js" },
		{ from: "config/main.yo.tpl", to: "config/main.js" },
		{ from: "config/plugins.yo.tpl", to: "config/plugins.js" },
		{ from: "config/webpack.dev.yo.tpl", to: "config/webpack.dev.js" },
		{ from: "config/webpack.yo.tpl", to: "config/webpack.js" },

		{ from: "src/components/app/**/*.tsx", to: `${sourceRoot}/components/app` },
		{ from: "src/components/app/**/*.ts", to: `${sourceRoot}/components/app` },
		{ from: "src/config/*.tsx", to: `${sourceRoot}/config` },
		{ from: "src/middlewares/*.ts", to: `${sourceRoot}/middlewares` },
		{ from: "src/store/*.ts", to: `${sourceRoot}/store` },
		{ from: "src/utils/**/*.ts", to: `${sourceRoot}/utils` },
		{ from: "src/index.html", to: `${sourceRoot}/index.html` },
		{ from: "src/config/bootstrap.yo.tpl", to: `${sourceRoot}/config/bootstrap.ts` },
		{ from: "src/app.tsx", to: `${sourceRoot}/app.tsx` },
		{ from: "src/vendor.ts", to: `${sourceRoot}/vendor.ts` }
	];

	if (styledComponents) {
		mainFiles = mainFiles.concat([
			{
				from: "src/styled/container.yo.tpl",
				to: `${sourceRoot}/styled/container.tsx`
			}
		]);
	}

	return mainFiles;
};
