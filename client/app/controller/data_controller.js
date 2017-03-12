angular.module('app').controller('DataController',['$scope', '$http', 'ZoneFactory','PublicAreasFactory','$uibModal', 

  function($scope, $http, ZoneFactory, PublicAreasFactory, $uibModal) {

    $scope.currentIris = '';

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

    var getModal = function () {
            return {
                templateUrl: 'ZoneInfoModal.html',
                controller: 'DataController',
                size: 'md'
            }
    };

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
        var template = getModal();
        $scope.currentIris = leafletPayload.leafletObject.feature.properties.name;
        $uibModal.open(template); 
          
    });

    console.log($scope.currentIris)



    var getColor = function(number){
      switch(number) {
        case 5:
            return "green"
            break;
        case 4:
            return "blue"
            break;
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

    $scope.init = function() {

        PublicAreasFactory.all().then (function (response) {
      
        var features = new Array;
        
        response.data.records.forEach (function (record) {
            areas.forEach( function (area) {
              if (area.code == record.fields.iris){
                    if(record.fields.geo_shape.coordinates.length == 1){
                        features.push({
                          "type": "Feature",
                          "properties": {
                            "name" : record.fields.iris,
                            "number" : area.nombre
                          },
                          "geometry": {
                            "type": "Polygon",
                            "coordinates": record.fields.geo_shape.coordinates
                          }
                        });
                  }
              }
            });
        });

        var data = {
           "type": "FeatureCollection",
           "features": features
        };


        $scope.geojson = createGeoJsonObject(data);


       //console.log($scope.geojson.data);


      },
      function (error) {
       console.log(error);
      });
    }


  }
]);
