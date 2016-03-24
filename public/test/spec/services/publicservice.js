'use strict';

describe('Service: publicService', function () {

  // load the service's module
  beforeEach(module('generatorYeomanApp'));

  // instantiate service
  var publicService;
  beforeEach(inject(function (_publicService_) {
    publicService = _publicService_;
  }));

  it('should do something', function () {
    expect(!!publicService).toBe(true);
  });

});
