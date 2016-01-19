/**
 * Created by Aaron on 1/14/2016.
 */
define(['app'], function(app)
{
    app.controller('AboutChildViewController', ['$scope', function($scope)
    {
        $scope.items = ["A", "List", "Of", "Items"];
    }]);
});