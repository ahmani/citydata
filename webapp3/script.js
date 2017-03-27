var app = angular.module("app", ["leaflet-directive"]);

app.controller('MapController', ['$scope', '$http', 'leafletData', function($scope, $http, leafletData) {

  angular.extend($scope, {
    london: {
      lat: 51.505,
      lng: -0.09,
      zoom: 8
    }
  });

  $http.get("test.geojson").success(function(data, status) {
    addGeoJsonLayerWithClustering(data);
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

}]);

