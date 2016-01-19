define(['app'], function(app)
{
    app.controller('AboutChildViewController', ['$scope', function($scope)
    {
        $scope.items = ["A", "List", "Of", "Items"];
    }]);
});