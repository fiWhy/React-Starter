var testContext = require.context('./', true, /\.spec\.tsx/);
var bundleContext = require.context('./', false, /(vendor|app)\.tsx/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

bundleContext('./vendor.tsx');
bundleContext('./test.vendor.tsx');
bundleContext('./app.tsx');


requireAll(testContext);