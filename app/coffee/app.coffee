angular
  .module('tania', [
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
      .when '/contrate-me',
        templateUrl: 'views/contrate-me.html',
        controller: 'MainCtrl'
      .otherwise redirectTo: '/'
  .controller 'MainCtrl', ($scope) ->
    $scope.aptidoes = Tania.aptidoes
  .controller 'AboutCtrl', ($scope) ->
    $scope.me = Tania

    
