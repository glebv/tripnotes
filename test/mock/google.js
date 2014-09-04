'use strict';

angular.module('mockedGoogle', [])
  .value('defaultJSON', {
        "results" : [
          {
            "address_components" : [
              {
                "long_name" : "Одесса",
                "short_name" : "Одесса",
                "types" : [ "locality", "political" ]
              },
              {
                "long_name" : "Одесский горсовет",
                "short_name" : "Одесский горсовет",
                "types" : [ "administrative_area_level_3", "political" ]
              },
              {
                "long_name" : "Одесская область",
                "short_name" : "Одесская область",
                "types" : [ "administrative_area_level_1", "political" ]
              },
              {
                "long_name" : "Украина",
                "short_name" : "UA",
                "types" : [ "country", "political" ]
              }
            ],
            "formatted_address" : "Одесса, Одесская область, Украина",
            "geometry" : {
              "bounds" : {
                "northeast" : {
                  "lat" : 46.60042199999999,
                  "lng" : 30.8118901
                },
                "southwest" : {
                  "lat" : 46.319522,
                  "lng" : 30.6116849
                }
              },
              "location" : {
                "lat" : 46.482526,
                "lng" : 30.7233095
              },
              "location_type" : "APPROXIMATE",
              "viewport" : {
                "northeast" : {
                  "lat" : 46.60042199999999,
                  "lng" : 30.8118901
                },
                "southwest" : {
                  "lat" : 46.319522,
                  "lng" : 30.6116849
                }
              }
            },
            "types" : [ "locality", "political" ]
          },
          {
            "address_components" : [
              {
                "long_name" : "Одесса",
                "short_name" : "Одесса",
                "types" : [ "locality", "political" ]
              },
              {
                "long_name" : "Эктор",
                "short_name" : "Эктор",
                "types" : [ "administrative_area_level_2", "political" ]
              },
              {
                "long_name" : "Техас",
                "short_name" : "TX",
                "types" : [ "administrative_area_level_1", "political" ]
              },
              {
                "long_name" : "Соединенные Штаты Америки",
                "short_name" : "US",
                "types" : [ "country", "political" ]
              }
            ],
            "formatted_address" : "Одесса, Техас, США",
            "geometry" : {
              "bounds" : {
                "northeast" : {
                  "lat" : 31.954475,
                  "lng" : -102.2456889
                },
                "southwest" : {
                  "lat" : 31.798745,
                  "lng" : -102.4414181
                }
              },
              "location" : {
                "lat" : 31.8456816,
                "lng" : -102.3676431
              },
              "location_type" : "APPROXIMATE",
              "viewport" : {
                "northeast" : {
                  "lat" : 31.954475,
                  "lng" : -102.2456889
                },
                "southwest" : {
                  "lat" : 31.798745,
                  "lng" : -102.4414181
                }
              }
            },
            "types" : [ "locality", "political" ]
          },
          {
            "address_components" : [
              {
                "long_name" : "Одесса",
                "short_name" : "Одесса",
                "types" : [ "locality", "political" ]
              },
              {
                "long_name" : "Паско",
                "short_name" : "Паско",
                "types" : [ "administrative_area_level_2", "political" ]
              },
              {
                "long_name" : "Флорида",
                "short_name" : "FL",
                "types" : [ "administrative_area_level_1", "political" ]
              },
              {
                "long_name" : "Соединенные Штаты Америки",
                "short_name" : "US",
                "types" : [ "country", "political" ]
              }
            ],
            "formatted_address" : "Одесса, Флорида, США",
            "geometry" : {
              "bounds" : {
                "northeast" : {
                  "lat" : 28.1950641,
                  "lng" : -82.515879
                },
                "southwest" : {
                  "lat" : 28.172714,
                  "lng" : -82.5924299
                }
              },
              "location" : {
                "lat" : 28.1793926,
                "lng" : -82.5579537
              },
              "location_type" : "APPROXIMATE",
              "viewport" : {
                "northeast" : {
                  "lat" : 28.1950641,
                  "lng" : -82.515879
                },
                "southwest" : {
                  "lat" : 28.172714,
                  "lng" : -82.5924299
                }
              }
            },
            "types" : [ "locality", "political" ]
          }
        ],
        "status" : "OK"
  });