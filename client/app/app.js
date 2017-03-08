var app = angular.module("app", ['ngAnimate', 'leaflet-directive']);
app.constant('API_URL', 'localhost/citydata/rest/');
app.config(function($logProvider){
  $logProvider.debugEnabled(false);
});
    