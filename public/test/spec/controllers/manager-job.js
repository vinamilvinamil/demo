'use strict';

describe('Controller: ManagerJobCtrl', function () {

  // load the controller's module
  beforeEach(module('generatorYeomanApp'));

  var ManagerJobCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagerJobCtrl = $controller('ManagerJobCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
