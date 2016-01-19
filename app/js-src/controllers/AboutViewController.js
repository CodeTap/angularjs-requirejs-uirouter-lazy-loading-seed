define(['app','directives/app-color'], function(app)
{
    app.controller('AboutViewController', ['$scope', function($scope)
    {
        $scope.page =
        {
            heading: 'About Us'
        };
    }]);
});