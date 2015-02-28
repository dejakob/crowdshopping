'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ui.router'
]);

myApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/receiver-choose-shop");

	//
	// Now set up the states
	$stateProvider
		.state('receiver-choose-shop', {
			url: "/receiver-choose-shop",
			controller: 'ChooseShopCtrl',
			templateUrl: "templates/receiver/choose-shop.html"
		})
		.state('receiver-add-list', {
			url: "/receiver-add-list/:shop",
			views: {
				'': {
					templateUrl: "templates/receiver/add-list.html"
				},
				'right@receiver-add-list': {
					templateUrl: "templates/receiver/categories.html",
					controller: "CategoryCtrl"
				}
			}
		})
		.state('receiver-add-list.product', {
			views: {
				url: "/receiver-add-list/product/:category",
				'': {
					templateUrl: "templates/receiver/add-list.html"
				},
				'right@receiver-add-list': {
					templateUrl: "templates/receiver/products.html",
					controller: "ProductCtrl"
				}
			}
		})
		.state('receiver-my-list', {
			url: "/receiver-my-list",
			controller: "MyListCtrl",
			templateUrl: "templates/receiver/my-list.html"
		});
});
