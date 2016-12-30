var testContext = require.context('./', true, /\.spec\.tsx/);
var bundleContext = require.context('./', false, /(vendor|app)\.tsx/);

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

bundleContext('./vendor.ts');
bundleContext('./vendor.test.ts');
bundleContext('./app.ts');


requireAll(testContext);