var app = angular.module("app", ['ngAnimate', 'leaflet-directive','ui.bootstrap', 'ui.router']);
app.constant('API_URL', 'localhost/citydata/rest/');
app.config(function($logProvider){
  $logProvider.debugEnabled(true);
});
/*app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    //Default route
    //$urlRouterProvider.otherwise('/index.html');

    //Routeur à partir de /home#{view}
    $stateProvider.state(
        'index', {
            url: '/index', templateUrl: 'index.html', controller: 'DataController'
        })
        .state('home.destination',{
            url: '/destination', templateUrl: 'app/templates/destination.html', controller: 'DestinationController'
        })
    $httpProvider.interceptors.push('httpRequestInterceptor');

});
app.run(run);*/