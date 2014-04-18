var app = angular.module('frontApp', [
  'ngRoute',
  'ngResource',
  'ngSanitize'
]).
config(function($routeProvider) {
  $routeProvider
  	.when('/', {templateUrl: 'partials/index.html', controller: 'HomeCtrl'})
	.otherwise({redirectTo: '/'});
});