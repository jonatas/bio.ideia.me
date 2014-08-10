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
  }).directive('tooltip', function() {
    return {
      link: function(scope, element, attrs) {
        return $(element).hover((function() {
          return $(element).tooltip('show');
        }), (function() {
          return $(element).tooltip('hide');
        }));
      }
    };
  });

  $(document).ready(function() {
    return $("[data-toggle=tooltip]").tooltip();
  });

}).call(this);
