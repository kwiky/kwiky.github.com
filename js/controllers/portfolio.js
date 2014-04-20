app.controller('PortfolioCtrl', function ($scope, PortfolioFactory) {
	PortfolioFactory.find().then(function(projects) {
		$scope.projects = projects;
	}, function(msg) {
		// TODO : better errors management
		alert(msg);
	});
});