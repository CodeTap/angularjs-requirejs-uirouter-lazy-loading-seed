'use strict';

module('app', function(app)
{
    console.log(app)
});


define(['controllers/AboutChildViewController'], function(app)
{
    describe("The 'AboutChildViewController'", function()
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

            $controller('AboutChildViewController', {$scope: $scope});
        });

        it("should have a list of items", function()
        {
            expect($scope.items[0]).toBe("A");
            expect($scope.items[1]).toBe("List");
            expect($scope.items[2]).toBe("Of");
            expect($scope.items[3]).toBe("Items");

        });

    });
});