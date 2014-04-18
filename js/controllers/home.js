app.controller('HomeCtrl', function ($scope, AboutFactory) {
	$scope.about = AboutFactory.get();
});