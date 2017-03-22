angular.module('app').controller('DataController',['$rootScope','$scope', '$http', 'AreaFactory','PublicAreasFactory','$uibModal', 'ServicesFactory', 'leafletData',
                function($rootScope,$scope, $http, AreaFactory, PublicAreasFactory, $uibModal, ServicesFactory, leafletData) {

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

    function addGeoJsonLayerWithClustering(data) {
      var markers = L.markerClusterGroup();
      var geoJsonLayer = L.geoJson(data, {
          onEachFeature: function (feature, layer) {
              layer.bindPopup(feature.properties.name);
          }
      });
      markers.addLayer(geoJsonLayer);
      leafletData.getMap().then(function(map) {
        map.addLayer(markers);
        //map.fitBounds(markers.getBounds());
      });
    }


    var features = new Array;

    $scope.changeTest = function(v){

      if ($scope.answers3[v]) {
        $http.get('test.geojson').then(function(response) {
          addGeoJsonLayerWithClustering(response.data);

        });
      }
    };


        $scope.changeStop = function(v){

          //empty features with Category Parking
          features.slice().reverse().forEach(function (feature, index, object){
            if (feature.properties.category == 'Bus Stop'){
              features.splice(object.length - 1 - index, 1);
            }
          });

          if ($scope.answers2[v]) {
            $http.get('http://project2.local/citydata/api/rest/bus-stops').then(function(response) {

              response.data.forEach( function (data) {
                var coordinates = new Array;
                coordinates[0] = data.longitude;
                coordinates[1] = data.latitude;

                features.push({
                  "type": "Feature",
                  "properties": {
                    "name" : data.description,
                    "category" : "Bus Stop"
                  },
                  "geometry": {
                    "type": "Point",
                    "coordinates": coordinates
                  }
                });

              });

              var data = {
                 "type": "FeatureCollection",
                 "features": features
              };

              //$scope.geojson = createGeoJsonObject(data);
              $scope.geojson = addGeoJsonLayerWithClustering(data);

            });
          }
        };




    $scope.changeParking = function(v){

      //empty features with Category Parking
      features.slice().reverse().forEach(function (feature, index, object){
        if (feature.properties.category == 'Parking'){
          features.splice(object.length - 1 - index, 1);
        }
      });

      if ($scope.answers[v]) {
        $http.get('https://geoservices.grand-nancy.org/arcgis/rest/services/public/VOIRIE_Parking/MapServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson').then(function(response) {

          response.data.features.forEach( function (feature) {
            var coordinates = new Array;
            coordinates[0] = feature.geometry.x;
            coordinates[1] = feature.geometry.y;

            features.push({
              "type": "Feature",
              "properties": {
                "name" : feature.attributes.NOM,
                "category" : "Parking"
              },
              "geometry": {
                "type": "Point",
                "coordinates": coordinates
              }
            });

          });

          var data = {
             "type": "FeatureCollection",
             "features": features
          };

          $scope.geojson = createGeoJsonObject(data);

        });
      }
    };


    var getModal = function () {
            return {
                templateUrl: 'ZoneInfoModal.html',
                controller: 'DataController',
                size: 'md'
            }
    };
    $http.get('http://project2.local/citydata/api/rest/families').then(function(response) {
        $scope.familiesList = [];
        response.data.forEach(function(data) {
          $scope.familiesList.push(data);
        });
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
        clickArea(leafletPayload.leafletObject.feature)
    });

    var clickArea = function(area)
    {
        var template = getModal();
         $rootScope.area = area.properties.id_area
         $uibModal.open(template);
         ServicesFactory.ServicesByArea($rootScope.area).then (function (response) {
            $rootScope.services = response.data
         });
    }

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

    $scope.selected = {
            families: []
    };

      $scope.changeFamilies = function() {
        AreaFactory.all($scope.selected.families).then(function (response) {
                areas = response.data;
                //console.log(response);
                $scope.init()
            }, function (error) {
                console.log(error);
        });
     };
    $scope.init = function() {


        //call the factory one time, put data in Array
        PublicAreasFactory.all().then (function (response) {

        //empty features with Category Area
        features.slice().reverse().forEach(function (feature, index, object){
          if ((feature.properties.category == 'Area') || (feature.properties.category == 'Bus Stop')) {
            features.splice(object.length - 1 - index, 1);
          }
        });

        response.data.records.forEach (function (record) {
            if(areas.length > 0){
            areas.forEach( function (area) {
              if (area.code == record.fields.iris){
                    if(record.fields.geo_shape.coordinates.length == 1){
                        features.push({
                          "type": "Feature",
                          "properties": {
                            "name" : record.fields.iris,
                            "number" : area.nombre,
                            "id_area" : area.id_area,
                            "category" : "Area"
                          },
                          "geometry": {
                            "type": "Polygon",
                            "coordinates": record.fields.geo_shape.coordinates
                          }
                        });
                  }
              }
            });

        }
        });

        var data = {
           "type": "FeatureCollection",
           "features": features
        };


        $scope.geojson = createGeoJsonObject(data);
        //console.log($scope.geojson)

      },
      function (error) {
       console.log(error);
      });
    }


  }
]);
