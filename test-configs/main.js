module.exports.app = function() {
	return {
		projectName: "Test React, Typescript, Webpack",
		projectKeywords: "Raccoon",
		projectDescription: "Hello there, Raccoon!",
		projectDev: "Raccoon",

		withContentFiles: [
			"src/components/dashboard/presentations/dashboard.tsx",
			"src/components/home/presentations/home.tsx"
		],

		withAdditionalFiles: ["package.json", ".gitignore", "tsconfig.json"],
		withContentFolders: ["src/components/dashboard", "src/components/home"]
	};
};
