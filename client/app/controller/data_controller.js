angular.module('app').controller('DataController',['$rootScope','$scope', '$http', 'AreaFactory','PublicAreasFactory','$uibModal', 'ServicesFactory', 'DataFactory', 'FamiliesFactory',
                function($rootScope,$scope, $http, AreaFactory, PublicAreasFactory, $uibModal, ServicesFactory, DataFactory, FamiliesFactory) {

    $scope.markers = [];
    areas =[];
    $scope.selected = {
        families: []
    };
    $rootScope.percents = []
   // $rootScope.Selectedareas = [];
   // $scope.Selectedareas = [];

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
        ///$rootScope.Selectedareas = $scope.Selectedareas;
         var template = getModal();
         $rootScope.area = area.properties.id_area
        $rootScope.percentages = []
         $uibModal.open(template);
         ServicesFactory.ServicesByArea($rootScope.area).then (function (response) {
             console.log(response.data)
            $rootScope.services_family = response.data
            /*response.data.forEach(function(d)
            {
                $rootScope.percentages.push( Math.round((d.pivot.number /n)*100) )
            
            })*/
           
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
                $scope.init()
            }, function (error) {
                console.log(error);
        });
    }

    var Getmarkers = function()
    {
        if($scope.selectedareas.length > 0)
        {
            $scope.markers = [];
            DataFactory.all(JSON.stringify($scope.selectedareas)).then(function(response){
                response.data.forEach( function (d) {
                    $scope.markers.push({
                        lat: parseFloat(d.latitude),
                        lng: parseFloat(d.longitude),
                        message: d.description,
                        icon : Geticon(d.id_family)
                    });
                });
            });
        }    
    }

    var Geticon = function($id_family)
    {   
        switch($id_family) {
            case (1):
               var icon = {
                    iconUrl: 'img/icons/parking-icon.png',
                    iconSize:     [26, 26],
                }
                break;
            case (3):
                var icon = {
                    iconUrl: 'img/icons/supermarket-icon.png',
                    iconSize:     [26, 26],
                 }
                break;
            case (5):
                var icon = {
                    iconUrl: 'img/icons/petit-commerce-icon.png',
                    iconSize:     [26, 26],
                }
                break;
            default:
                var icon = {
                    iconUrl: 'https://lh4.ggpht.com/Tr5sntMif9qOPrKV_UVl7K8A_V3xQDgA7Sw_qweLUFlg76d_vGFA7q1xIKZ6IcmeGqg=w300',
                    iconSize:     [26, 26],
                }
      }
        
        return icon;
    }


    $scope.init = function() {

        getFamilies();
      
        //call the factory one time, put data in Array
        PublicAreasFactory.all().then (function (response) {

        var features = new Array;
        $scope.selectedareas = [];
        $scope.percents = [];

        response.data.records.forEach (function (record) {
            if(areas.length > 0){
            $scope.selectedareas = areas
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
        
        Getmarkers();
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
