(function() {
  angular.module('tania', ['ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']).config(function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/contato', {
      templateUrl: 'views/contato.html',
      controller: 'MainCtrl'
    }).when('/contrate-me', {
      templateUrl: 'views/contrate-me.html',
      controller: 'MainCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  }).controller('MainCtrl', function($scope) {
    return $scope.me = Tania;
  });

}).call(this);
