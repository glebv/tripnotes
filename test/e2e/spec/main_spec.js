'use strict';

describe('tripnotes mainpage', function() {
  it('should contain a title', function() {
    browser.get('http://localhost:9001');
    expect(browser.getTitle()).toEqual('TripNotes');
  });
});
