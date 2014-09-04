'use strict';

/**
 * @ngdoc function
 * @name tripnotesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tripnotesApp
 */
angular.module('main', ['tripnotesApp', 'ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      });
  }])
  .controller('MainCtrl', ['$scope', 'google',  function ($scope, google) {
    $scope.searchLocation = google.searchLocation;
  }]);
