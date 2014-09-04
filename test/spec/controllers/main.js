'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tripnotesApp'));

  var MainCtrl, scope, $rootScope, $state, $injector;

  beforeEach(inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {
    $rootScope = _$rootScope_;
    $injector = _$injector_;
    $state = _$state_;

    $templateCache.put('/views/main.html', '');
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should be closure to google service', function () {
    expect(typeof scope.searchLocation === 'function').toBe(true);
  });
});
