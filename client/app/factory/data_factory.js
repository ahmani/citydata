angular.module('app').factory('DataFactory', ['$http', 'API_URL', function ($http, API_URL ) {
return {
        all:function () {
           return  $http.get(API_URL + 'data');
        }
    }
}]);