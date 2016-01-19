require.config({
    baseUrl: '/js-src',
    paths: {
		'angular': '/bower_components/angular/angular',
		'angular-ui-router': '/bower_components/angular-ui-router/release/angular-ui-router.min',
		'uiBootstrap': '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
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
	}
});

require
(
    [
        'app'
    ],
    function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);