var myApp = angular.module('myApp');

myApp.controller('ProductCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
	$scope.category = $stateParams.category;

}]);

