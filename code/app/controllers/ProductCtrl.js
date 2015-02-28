var myApp = angular.module('myApp');

myApp.controller('ProductCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
	if ($stateParams.category == 'fruits') {
		$scope.products = [
			{name: 'Apple', value: 'apple', img: 'apple.jpg'},
			{name: 'Banana', value: 'banana', img: 'banana.jpg'},
			{name: 'Orange', value: 'orange', img: 'orange.jpg'},
			{name: 'Pear', value: 'pear', img: 'pear.jpg'},
			{name: 'Lemon', value: 'lemon', img: 'lemon.jpg'}
		];
	} else if ($stateParams.category == 'vegetables') {
		$scope.products = [
			{name: 'Tomato', value: 'tomato', img: 'tomato.jpg'},
			{name: 'Beans', value: 'beans', img: 'beans.jpg'},
			{name: 'Beets', value: 'beets', img: 'beets.jpg'},
			{name: 'Celeri', value: 'celeri', img: 'celeri.jpg'},
			{name: 'Spinach', value: 'spinach', img: 'spinash.jpg'},
			{name: 'Pumpkin', value: 'pumpkin', img: 'pumpkin.jpg'},
			{name: 'Lettuce', value: 'lettuce', img: 'lettuce.jpg'},
			{name: 'Pepper', value: 'pepper', img: 'pepper.jpg'},
			{name: 'Celeri Rave', value: 'celeri-rave', img: 'celeri-rave.jpg'}
		];
	} else if ($stateParams.category == 'dairy') {
		$scope.products = [
			{name: 'Cheese', value: 'cheese', img: 'cheese.jpg'},
			{name: 'Milk', value: 'milk', img: 'milk.jpg'}
		];
	} else if ($stateParams.category == 'drinks') {
		$scope.products = [
			{name: 'Wine', value: 'wine', img: 'wine.jpg'},
			{name: 'Beer', value: 'beer', img: 'beer.jpeg'}
		];
	}

}]);

