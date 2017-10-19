module.exports = function(config) {
  let mainFiles = [
    { from: "_tsconfig.json", to: "tsconfig.json" },
    { from: "package.json.yo.tpl", to: "package.json" },
    { from: "_gitignore", to: ".gitignore" },
    { from: "helpers/*.js", to: "helpers" },
    { from: "tasks/*.js", to: "tasks" },
    { from: "custom-typings/*.ts", to: "custom-typings" },

    /** Config files */
    { from: "config/karma.conf.yo.tpl", to: "config/karma.conf.js" },
    { from: "config/loaders.yo.tpl", to: "config/loaders.js" },
    { from: "config/main.yo.tpl", to: "config/main.js" },
    { from: "config/plugins.yo.tpl", to: "config/plugins.js" },
    { from: "config/webpack.dev.yo.tpl", to: "config/webpack.dev.js" },
    { from: "config/webpack.test.yo.tpl", to: "config/webpack.test.js" },
    { from: "config/webpack.yo.tpl", to: "config/webpack.js" },

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
      {
        from: "src/components/dashboard/presentations/dashboard.yo.tpl",
        to: "src/components/dashboard/presentations/dashboard.tsx"
      },
      {
        from: "src/components/home/presentations/home.yo.tpl",
        to: "src/components/home/presentations/home.tsx"
      }
    ]);

    if (config.styledComponents) {
      mainFiles = mainFiles.concat([
        {
          from: "src/styled/container.yo.tpl",
          to: "src/styled/container.tsx"
        }
      ]);
    }
  }

  return mainFiles;
};
