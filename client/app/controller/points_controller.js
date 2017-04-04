angular.module('app').controller('PointsController',['API_URL','$rootScope','$scope', '$http', 'ServicesFactory', 'AreaFactory','PublicAreasFactory', 'GeographicalData',
                function(API_URL,$rootScope,$scope, $http, ServicesFactory, AreaFactory, PublicAreasFactory, GeographicalData) {

    angular.extend($scope, {
      height: 500,
      width: 900,
      center: {
            lat: 48.69,
            lng: 6.182,
            zoom: 13
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
      },
      markers:{}
    });


    ServicesFactory.all().then(function(response) {
      $scope.services = new Array;
      //console.log(levelResponse.data.level);
      response.data.forEach( function (service){
        $scope.services.push({"id" : service.id, "title" : service.title});
        $scope.selectedService = $scope.services[0];
      });
      //console.log($scope.levels);
    },
    function (error) {
      console.log(error);
    });


    $scope.createPoint = function (){
      data = { "lat" : $scope.lat, "lng" : $scope.lng, "description": $scope.pointDescription, "area" : $scope.areaId, "service" : $scope.selectedService };
      GeographicalData.addData(data).then (function (response) {
        //console.log(response);
        $("#alert-success").show().delay(2000).fadeOut()
        $scope.lat = "";
        $scope.lng = "";
        $scope.pointDescription = "";
        $scope.selectedService.id = 1;
        $scope.markers.pop();
      });
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
        clickArea(leafletPayload.leafletEvent.latlng, leafletPayload.leafletObject.feature)
    });

    var clickArea = function(latlng, area){
        $scope.markers = new Array();
        $scope.markers.push({
          lat: latlng.lat,
          lng: latlng.lng,
          icon : {
                                iconUrl: 'https://lh4.ggpht.com/Tr5sntMif9qOPrKV_UVl7K8A_V3xQDgA7Sw_qweLUFlg76d_vGFA7q1xIKZ6IcmeGqg=w300',
                                iconSize:     [35, 35],
                }
        });
        $scope.lat = latlng.lat;
        $scope.lng = latlng.lng;
        $scope.areaId = area.properties.id;
        $scope.areaDescription = area.properties.description;


    }


    var getStyle = function(feature){
        return {
            fillColor: 'yellow',
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

    $scope.selected = {
            families: []
    };


    $scope.init = function() {

      var features = new Array;
      var areas = new Array;

      $http.get(API_URL + 'areas').then(function(response) {
        areas = response.data;

        //call the factory one time, put data in Array
        PublicAreasFactory.all().then (function (response) {

          response.data.records.forEach (function (record) {
            if(areas.length > 0){
              areas.forEach( function (area) {
                if (area.code.slice(-4) == record.fields.iris){
                  if(record.fields.geo_shape.coordinates.length == 1){
                       features.push({
                         "type": "Feature",
                         "properties": {
                           "description" : area.description,
                           "code" : area.code.slice(-4),
                           "id" : area.id
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

        });
    },
    function (error) {
      console.log(error);
    });
  }


 }
]);
