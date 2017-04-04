var app = angular.module("app", ['ngAnimate', 'leaflet-directive','ui.bootstrap', 'ngRoute','checklist-model']);
<<<<<<< HEAD


app.constant('API_URL', 'http://localhost/citydata/api/rest/');

=======
    app.constant('API_URL', 'http://localhost/citydata/api/rest/');
>>>>>>> fccafc7130dc8f03d54e94cf56f3aa6aa38b54d3

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
