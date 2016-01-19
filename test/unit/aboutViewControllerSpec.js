'use strict';

module('app', function(app)
{
    console.log(app)
});


define(['controllers/AboutViewController'], function(app)
{
    describe("The 'AboutViewController'", function()
    {
        var $rootScope;
        var $controller;
        var $scope;

        beforeEach(function()
        {
            module('app');

            inject
            ([
                '$injector',
                '$rootScope',
                '$controller',

                function($injector, _$rootScope, _$controller)
                {
                    $rootScope = _$rootScope;
                    $scope = $rootScope.$new();
                    $controller = _$controller;
                }
            ]);

            $controller('AboutViewController', {$scope: $scope});
        });

        it("should set the page heading to 'About Us'", function()
        {

            expect($scope.page.heading).toBe('About Us');

        });

    });
});