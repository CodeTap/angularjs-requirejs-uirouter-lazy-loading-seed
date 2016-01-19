define(['routes','uiBootstrap','angular-ui-router'], function(config)
{
    var app = angular.module('app', ['ui.bootstrap','ui.router']);

    app.config(
    [
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        '$stateProvider',
        '$urlRouterProvider',

        function($locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $stateProvider, $urlRouterProvider)
        {
	        app.controller = $controllerProvider.register;
	        app.directive  = $compileProvider.directive;
	        app.filter     = $filterProvider.register;
	        app.factory    = $provide.factory;
	        app.service    = $provide.service;

            $locationProvider.html5Mode(true);

            if(config.states !== undefined)
            {
                angular.forEach(config.states, function(states, path)
                {
                    //console.log(route);
                    //$urlRouterProvider.when(path, {templateUrl:route.templateUrl, resolve:dependencyResolverFor(route.dependencies)});
                    $stateProvider.state(states.name,states.data);
                });
            }

            if(config.defaultRoutePaths !== undefined)
            {
                $urlRouterProvider.otherwise({redirectTo:config.defaultRoutePaths});
            }
        }
    ]);

   return app;
});