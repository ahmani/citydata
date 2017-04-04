var app = angular.module("app", ['ngAnimate', 'leaflet-directive','ui.bootstrap', 'ngRoute','checklist-model']);
<<<<<<< HEAD



app.constant('API_URL', 'http://localhost/citydata/api/rest/');

=======
    app.constant('API_URL', 'http://project2.local/citydata/api/rest/');
>>>>>>> 2aa88285f40157471d2f7317e845a3f497a603bd

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
