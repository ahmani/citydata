angular.module('app').controller('DataController',['$rootScope','$scope', '$http', 'AreaFactory','PublicAreasFactory','$uibModal', 'ServicesFactory', 'DataFactory', 'FamiliesFactory',
                function($rootScope,$scope, $http, AreaFactory, PublicAreasFactory, $uibModal, ServicesFactory, DataFactory, FamiliesFactory) {
                
                $scope.markers = [];
                areas =[];
                $scope.selected = {
                     families: []
                };

    var getModal = function () {
            return {
                templateUrl: 'ZoneInfoModal.html',
                controller: 'DataController',
                size: 'md'
            }
    };
    var getFamilies = function()
    {
        FamiliesFactory.all().then(function(response) {
            $scope.familiesList = [];
            response.data.forEach(function(data) {
            $scope.familiesList.push(data);
            });
        });
    }
    
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

    $scope.changeFamilies = function() {
        AreaFactory.all(JSON.stringify($scope.selected.families)).then(function (response) {
                areas = response.data;
                $scope.init()
                console.log(areas)
            }, function (error) {
                console.log(error);
        });  
    };

    var Getmarkers = function()
    {
        DataFactory.all().then(function(response){
            response.data.forEach( function (d) {
                $scope.markers.push({
                    lat: parseFloat(d.latitude),
                    lng: parseFloat(d.longitude),
                    icon : {
                                iconUrl: 'https://lh4.ggpht.com/Tr5sntMif9qOPrKV_UVl7K8A_V3xQDgA7Sw_qweLUFlg76d_vGFA7q1xIKZ6IcmeGqg=w300',
                                iconSize:     [60, 60],
                            }
                });
            });
        });
    }

    $scope.init = function() {
        getFamilies();
        Getmarkers();
        //call the factory one time, put data in Array
        PublicAreasFactory.all().then (function (response) {
      
        var features = new Array;
        
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
                            "id_area" : area.id_area
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
      },
      function (error) {
       console.log(error);
      });
    }


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

    $scope.init();

  }
]);
