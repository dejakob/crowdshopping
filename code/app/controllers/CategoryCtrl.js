var myApp = angular.module('myApp');

myApp.controller('CategoryCtrl', ['$scope', function($scope) {
	$scope.categories = [
		{name: 'Fruit', value: 'fruit', img: 'img/fruits.jpg'},
		{name: 'Vegetables', value: 'fruit', img: 'img/vegetables.jpg'},
		{name: 'Meat', value: 'fruit', img: 'img/meat.jpg'},
		{name: 'Bread', value: 'fruit', img: 'img/bread.jpg'}
	];
}]);

