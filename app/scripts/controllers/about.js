(function() {
  angular.module('tania').controller('AboutCtrl', function($scope) {
    return $scope.formasContato = {
      email: "biomascarello@gmail.com",
      celular: "(46) 9901-1124"
    };
  });

}).call(this);
