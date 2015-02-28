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
			controller: "AddListCtrl",
			templateUrl: "templates/receiver/add-list.html"
		})
		;
});
