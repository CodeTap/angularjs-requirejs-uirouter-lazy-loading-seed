'use strict';

module('app', function(app)
{
    console.log(app)
});


define(['controllers/ContactViewController'], function(app)
{
    describe("The 'ContactViewController'", function()
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

            $controller('ContactViewController', {$scope: $scope});
        });

        it("should set the page heading to 'Contact Us'", function()
        {

            expect($scope.page.heading).toBe('Contact Us');

        });

    });
});