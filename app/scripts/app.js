'use strict';

/**
 * @ngdoc overview
 * @name tripnotesApp
 * @description
 * # tripnotesApp
 *
 * Main module of the application.
 */
angular
  .module('tripnotesApp', [
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'config',
    'main'
  ])
  .config(['$locationProvider', '$urlRouterProvider', function($locationProvider,  $urlRouterProvider) {
    $locationProvider.html5Mode(true);
  }]);
