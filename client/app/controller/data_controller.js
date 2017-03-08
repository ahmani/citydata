angular.module('app')
  .controller('DataController',
  ['$scope', '$http', 'ZoneFactory',
  function($scope, $http, ZoneFactory) {


    angular.extend($scope, {
      height: 500,
      width: 900,

      center: {
        lat: 48.69,
        lng: 6.182,
        zoom: 13
      },
      legend: {
        position: 'bottomleft',
        colors: [ 'yellow', 'orange', 'red' ],
        labels: [ 'Densité minimale', 'Densité moyenne', 'Densité forte' ]
      },
      defaults: {
        doubleClickZoom: false,
        scrollWheelZoom: true
      },
      events: {
        map: {
          enable: ['click'],
          logic: 'emit'
        }
      },
      tiles: {
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      }
    });

    // Mouse over function, called from the Leaflet Map Events
    var countryMouseover = function (feature, leafletEvent) {
        var layer = leafletEvent.target;
        layer.setStyle({
            weight: 2,
            color: '#666',
            fillColor: 'white'
        });
        layer.bringToFront();
    };

    $scope.$on("leafletDirectiveGeoJson.mouseover", function(ev, leafletPayload) {
        countryMouseover(leafletPayload.leafletObject.feature, leafletPayload.leafletEvent);
    });

    $scope.$on("leafletDirectiveGeoJson.click", function(ev, leafletPayload) {
        console.log(leafletPayload.leafletObject.feature.properties.name);
    });


    var getColor = function(number){
      switch(number) {
        case 3:
            return "red"
            break;
        case 2:
            return "orange"
            break;
        default:
            return "yellow"
      }
    };

    var getStyle = function(feature){
        return {
            fillColor: getColor(feature.properties.number),
            weight: 2,
            opacity: 0.3,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.3
        };
    };

    var createGeoJsonObject = function (data){
             return {
                 data: data,
                 resetStyleOnMouseout: true,
                 style: getStyle
             };
    };

    var areas = new Array;

        ZoneFactory.all().then(function (response) {
                    areas = response.data;
                }, function (error) {
                    console.log(error);
                });

    //areas = [{ "name" : "0101", "number" : 1}, { "name" : "0102", "number" : 2}, { "name" : "0103", "number" : 3}];

    var getNumber = function(name, areas){
      var number;
      areas.forEach( function (area) {
        var shrunk = area.code.match(/.{1,5}/g);
        if (shrunk[1] == name){
          number = area.nomber;
        }
      });
      if (number)
        return number;
      else
        return 0;
    }
    

    $scope.init = function() {

      $http.get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=contours-iris-2014&q=Nancy&rows=50&sort=iris&facet=nom_dept&facet=nom_region&refine.nom_com=Nancy&exclude.code_region=21&exclude.code_region=41').then (function (response) {
        //var list = ZoneFactory
      
        var features = new Array;

        response.data.records.forEach (function (record) {
          console.log(record.fields.geo_shape.coordinates);

          if(record.fields.geo_shape.coordinates.length == 1){
            features.push({
              "type": "Feature",
              "properties": {
                "name" : record.fields.iris,
                "number" : getNumber(record.fields.iris, areas)
              },
              "geometry": {
                "type": "Polygon",
                "coordinates": record.fields.geo_shape.coordinates
              }
            });
          }
        });

        var data = {
           "type": "FeatureCollection",
           "features": features
        };


        $scope.geojson = createGeoJsonObject(data);


        console.log($scope.geojson.data);


      },
      function (error) {
       console.log(error);
      });
    }


  }
]);
