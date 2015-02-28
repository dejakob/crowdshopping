var myApp = angular.module('myApp');

myApp.controller('ChooseShopCtrl', ['$scope', function($scope) {
	$scope.shops = [
		{name:'Delhaize',value:'delhaize'},
		{name:'Carrefour',value:'carrefour'},
		{name:'Colruyt',value:'colruyt'}
	];
}]);

