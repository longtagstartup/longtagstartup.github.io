"use strict"
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

	$routeProvider

	.when('/',{
		templateUrl:'views/main.html'
	})
	.when('/sobrenos',{
		templateUrl:'views/sobrenos.html'
	})
	.when('/produtos',{
		templateUrl:'views/produtos.html'
	})
	
});
