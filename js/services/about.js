app.factory('AboutFactory', function($resource) {
   return $resource('/data/about.json');
});