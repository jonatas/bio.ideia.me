'use strict';

/**
 * @ngdoc function
 * @name yoTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoTestApp
 */
angular.module('yoTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      '2 AngularJS',
      '3 AngularJS',
      '4 AngularJS',
      '5 AngularJS',
      '6 AngularJS',
      'Karma'
    ];
  });
