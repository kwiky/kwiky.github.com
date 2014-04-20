var app = angular.module('frontApp', [
  'ngRoute',
  'ngResource',
  'ngSanitize'
]).
config(function($routeProvider) {
  $routeProvider
  	.when('/about', {templateUrl: 'partials/about.html', controller: 'HomeCtrl'})
  	.when('/skills', {templateUrl: 'partials/skills.html'})
  	.when('/portfolio', {templateUrl: 'partials/portfolio.html'})
  	.when('/photography', {templateUrl: 'partials/photography.html'})
  	.when('/contact', {templateUrl: 'partials/contact.html'})
	.otherwise({redirectTo: '/about'});
});