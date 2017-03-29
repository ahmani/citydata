angular.module('app').controller('DataController',['$rootScope','$scope', '$http', 'AreaFactory','PublicAreasFactory','$uibModal', 'ServicesFactory', 'DataFactory', 'FamiliesFactory',
                function($rootScope,$scope, $http, AreaFactory, PublicAreasFactory, $uibModal, ServicesFactory, DataFactory, FamiliesFactory) {

                $scope.markers = [];
                areas =[];
                $scope.selected = {
                  families: []
                };
                $scope.Selectedareas = [];


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
         ServicesFactory.servicesByArea($rootScope.area).then (function (response) {
            $rootScope.services = response.data
         });
    };

    var getColor = function(percent){

      switch(true) {
        case (percent  < 5):
            return "blue"
            break;
        case (percent < 10):
            return "green"
            break;
        case (percent < 20):
            return "yellow"
            break;
        case (percent < 50):
            return "orange"
            break;
        default:
            return "red"
      }
    };

    var getStyle = function(feature){
        return {
            fillColor: getColor(feature.properties.number / n * 100),
            weight: 2,
            opacity: 0.6,
            color: 'black',
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
    $scope.selected = {};
    $scope.getChecked = function(selected)
    {
        $scope.selected = selected;
        AreaFactory.all($scope.selected).then(function (response) {
                n = response.data.n;
                areas = response.data.values;
    /*$scope.changeFamilies = function() {
        AreaFactory.all(JSON.stringify($scope.selected.families)).then(function (response) {
                n = response.data.n;
                areas = response.data.values;*/
                $scope.init()
            }, function (error) {
                console.log(error);
        });
    }
    $scope.changeFamilies = function() {

    };

    var Getmarkers = function()
    {
        //console.log($scope.Selectedareas)
        if($scope.Selectedareas.length > 0)
        {

            DataFactory.all(JSON.stringify($scope.Selectedareas)).then(function(response){
                response.data.forEach( function (d) {
                    $scope.markers.push({
                        lat: parseFloat(d.latitude),
                        lng: parseFloat(d.longitude),
                        icon : {
                                    iconUrl: 'https://lh4.ggpht.com/Tr5sntMif9qOPrKV_UVl7K8A_V3xQDgA7Sw_qweLUFlg76d_vGFA7q1xIKZ6IcmeGqg=w300',
                                    iconSize:     [35, 35],
                                }
                    });
                });
            });
        }
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
                        $scope.Selectedareas.push(area.id_area)
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
            zoom: 14
      },
      legend: {
            position: 'bottomleft',
            colors: [ 'blue',"green", 'yellow', 'orange', 'red' ],
            labels: [ ' < 5%', '< 10%','< 20%', '< 50%', '< 100%' ]
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
