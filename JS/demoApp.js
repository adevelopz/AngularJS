(function(angular) {
	angular.module("myapp.HelloController", [])
    .controller("HelloController", function($scope) {
    $scope.helloTo = {};
    $scope.helloTo.title = "World, AngularJS";
    });
})(angular);