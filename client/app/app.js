var app = angular.module("app", ['ngAnimate', 'leaflet-directive','ui.bootstrap', 'ngRoute','checklist-model']);




app.constant('API_URL', 'http://project2.local/citydata/api/rest/');



app.config(function($logProvider){
$logProvider.debugEnabled(false);
});

app.config(function($routeProvider) {
  $routeProvider
                .when("/", {
                    templateUrl : "app/templates/home.html"
                })
                .when("/point", {
                    templateUrl : "app/templates/add_point.html"
                })
});
