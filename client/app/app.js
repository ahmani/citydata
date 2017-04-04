var app = angular.module("app", ['ngAnimate', 'leaflet-directive','ui.bootstrap', 'ngRoute','checklist-model']);
<<<<<<< HEAD

app.constant('API_URL', 'http://localhost/citydata/api/rest/');
=======
    app.constant('API_URL', 'http://project2.local/citydata/api/rest/');
>>>>>>> 37e0000b1c5034a0d948ae75c2e1da8085c560d9

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
