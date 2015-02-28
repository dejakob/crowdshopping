var myApp = angular.module('myApp');

myApp.controller('CategoryCtrl', ['$scope', function($scope) {
	$scope.categories = [
		{name: 'Fruits', value: 'fruits', img: 'fruits.jpg'},
		{name: 'Vegetables', value: 'vegetables', img: 'vegetables.jpg'},
		{name: 'Dairy', value: 'dairy', img: 'dairy.jpg'},
		{name: 'Non-food', value: 'nonfood', img: 'nonfood.jpg'},
		{name: 'Cosmetics', value: 'cosmetics', img: 'cosmetics.jpg'},
		{name: 'Frozen food', value: 'frozenfood', img: 'frozenfood.png'},
		{name: 'Preserves', value: 'preserves', img: 'preserves.jpg'},
		{name: 'Sweets', value: 'sweets', img: 'sweets.jpg'},
		{name: 'Soft Drinks', value: 'soft-drinks', img: 'soft-drinks.jpg'},
		{name: 'Drinks', value: 'drinks', img: 'drinks.jpg'}
	];
}]);

