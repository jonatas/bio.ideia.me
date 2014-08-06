angular.module('tania')
  .controller 'AboutCtrl', ($scope) ->
    $scope.nome = "Tânia Elisa Mascarello"
    $scope.profissão = "Bióloga"
    $scope.formasContato =
      email: "biomascarello@gmail.com"
      celular: "(46) 9901-1124"
