app.factory('PortfolioFactory', function($http, $q) {   
	var factory = {
		projects : false,
		find : function() {
			var deferred = $q.defer();

			if(factory.projects !== false) {
				deferred.resolve(factory.projects);
			}
			else
			{
				$http.get('data/portfolio.json')
					.success(function(data, status) {
						factory.projects = data;
						deferred.resolve(factory.projects);
					})
					.error(function(data, status) {
						deferred.reject('Can\'t get projects');
					});
			}

			return deferred.promise;
		},
		get : function(id) {
			var deferred = $q.defer();
			var project = {};
			var projects = factory.find().then(function(projects) {
				angular.forEach(projects, function(value, key) {
					if (value.id == id) {
						project = value;
					};
				});
				deferred.resolve(project);
			}, function(msg) {
				deferred.reject(msg);
			})

			return deferred.promise;
		}
	}

	return factory;
});