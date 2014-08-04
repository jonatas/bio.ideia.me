angular
  .module('yoTestApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      .when '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      .otherwise redirectTo: '/'