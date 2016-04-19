describe("Reset-Grid-Service", function(){
 // 'use strict';
  var factory,
      query,
      deferred,
      rootScope;

  beforeEach(module('refineryApp'));
  beforeEach(module('refineryFileBrowser'));
  beforeEach(inject( function(_resetGridService_){
    service = _resetGridService_;
  }));

  it('factory and tools variables should exist', function(){
    expect(service).toBeDefined();
    expect(service.resetGridFlag).toEqual(false);
  });

  describe("resetGridFlag", function() {

    it('setResetGridFlag is a method', function () {
      expect(angular.isFunction(service.setResetGridFlag)).toBe(true);
    });

    it('setResetGridFlag updates flag', function () {
      service.setResetGridFlag(true);
      expect(service.resetGridFlag).toEqual(true);
        service.setResetGridFlag(false);
      expect(service.resetGridFlag).toEqual(false);
    });
  });

});
