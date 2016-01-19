
'use strict';

module('app', function(app)
{
    console.log(app)
});


define(['controllers/AboutChildViewController2'], function(app)
{
    describe("The 'AboutChildViewController2'", function()
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

            $controller('AboutChildViewController2', {$scope: $scope});
        });

        it("should have a list of items", function()
        {
            expect($scope.items[0]).toBe("A");
            expect($scope.items[1]).toBe("Second");
            expect($scope.items[2]).toBe("List");
            expect($scope.items[3]).toBe("Of");
            expect($scope.items[4]).toBe("Items");

        });

    });
});