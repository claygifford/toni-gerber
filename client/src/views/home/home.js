angular.module('lbxApp')
.controller('homeController', ['$window', '$scope', function ($window, $scope) {

	$scope.myActions = function ()
	{
		$scope.showLoganLeavesAlot = false;
	}

	$scope.onClick = function ()
	{
		$scope.showLoganLeavesAlot = true;
	}
}]);