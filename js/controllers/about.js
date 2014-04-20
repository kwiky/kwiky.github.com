app.controller('AboutCtrl', function ($scope, AboutFactory) {
	$scope.about = AboutFactory.get();
});