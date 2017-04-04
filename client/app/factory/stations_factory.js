angular.module('app').factory('StationsFactory', ['$http', 'API_URL', function ($http, API_URL ) {
return {
        all:function () {
           return $http.get(API_URL+'geographical-data/services/37');
        }
    }
}]);
