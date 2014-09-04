'use strict';

describe('Service: google', function () {

  // load the service's module
  beforeEach(module('tripnotesApp', 'mockedGoogle'));

  // instantiate service
  var google, httpBackend, defaultJSON;
  beforeEach(inject(function (_google_, $httpBackend, _defaultJSON_) {
    google = _google_;
    httpBackend = $httpBackend;
    defaultJSON = _defaultJSON_;
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('searchLocation should response formatted_address', function () {
    httpBackend.expectGET('http://maps.googleapis.com/maps/api/geocode/json?address=Odessa&sensor=false' )
      .respond(defaultJSON);
    google.searchLocation('Odessa').then(function(locations) {
      expect(locations).toEqual(['Одесса, Одесская область, Украина', 'Одесса, Техас, США',  'Одесса, Флорида, США']);
    });
    httpBackend.flush();
  });
});
