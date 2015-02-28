var myApp = angular.module('myApp');

myApp.controller('AddListCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
	$scope.shop = $stateParams.shop;
}]);

