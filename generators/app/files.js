module.exports = function (config) {
    let mainFiles = [
        { from: "_tsconfig.json", to: "tsconfig.json" },
        { from: "package.json.yo.tpl", to: "package.json" },
        { from: "_gitignore", to: ".gitignore" },
        { from: "config/*.js", to: "config" },
        { from: "helpers/*.js", to: "helpers" },
        { from: "tasks/*.js", to: "tasks" },
        { from: "custom-typings/*.ts", to: "custom-typings" },


        { from: "src/components/app/**/*.tsx", to: "src/components/app" },
        { from: "src/config/*.tsx", to: "src/config" },
        { from: "src/middlewares/*.tsx", to: "src/middlewares" },
        { from: "src/store/*.tsx", to: "src/store" },
        { from: "src/utils/**/*.tsx", to: "src/utils" },
        { from: "src/index.html", to: "src/index.html" },
        { from: "src/config/bootstrap.yo.tpl", to: "src/config/bootstrap.tsx" },
        { from: "src/app.tsx", to: "src/app.tsx" },
        { from: "src/vendor.tsx", to: "src/vendor.tsx" }
    ];

    if (config.starterData) {
        mainFiles = mainFiles.concat([
            { from: "src/components/dashboard/**/*.tsx", to: "src/components/dashboard" },
            { from: "src/components/home/**/*.tsx", to: "src/components/home" },
            { from: "src/components/dashboard/presentations/dashboard.yo.tpl", to: "src/components/dashboard/presentations/dashboard.tsx" },
        ]);

        if (config.styledComponents) {
            mainFiles = mainFiles.concat([
                { from: "src/components/dashboard/styled/*.yo.tpl", to: "src/components/dashboard/styled" },
            ]);
        }
    }

    return mainFiles;
};