(function() {
  angular.module('tania', ['ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']).config(function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  }).controller('MainCtrl', function($scope) {
    return $scope.aptidoes = Tania.aptidoes;
  }).controller('AboutCtrl', function($scope) {
    return $scope.me = Tania;
  });

}).call(this);
