'use strict';

/**
 * @ngdoc service
 * @name tripnotesApp.google
 * @description
 * # google
 * Service in the tripnotesApp.
 */
angular.module('tripnotesApp')
  .service('google', ['$http', function google($http) {
    this.searchLocation = function(val) {
      return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: val,
          sensor: false
        }
      }).then(function(res){
        var addresses = [];
        angular.forEach(res.data.results, function(item){
          addresses.push(item.formatted_address);
        });
        return addresses;
      });
    };
  }]);
