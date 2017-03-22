var app = angular.module("app", ['ngAnimate', 'leaflet-directive','ui.bootstrap', 'ngRoute','checklist-model']);
app.constant('API_URL', 'http://localhost/citydata/api/rest/');

app.config(function($routeProvider) {
  $routeProvider
                .when("/", {
                    templateUrl : "app/templates/home.html"
                })
});
