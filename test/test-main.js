var tests = [];
for (var file in window.__karma__.files)
{
	if (window.__karma__.files.hasOwnProperty(file))
	{
		if (/Spec\.js$/.test(file))
		{
			tests.push(file);
		}
	}
}
requirejs.config
({
	// Karma serves files from '/base'
	baseUrl: '/base/app/js-src',
	paths: {
		'angular': '../bower_components/angular/angular',
		'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',
		'uiBootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
	},
	shim: {
		'app': {
			deps: ['angular','angular-ui-router', 'uiBootstrap']
		},
		'angular-ui-router': {
			deps: ['angular']
		},
		'uiBootstrap': {
			deps: ['angular']
		}
	},


	// ask Require.js to load these files (all our tests)
	deps: tests,

	// start test run, once Require.js is done
	callback: window.__karma__.start
});
