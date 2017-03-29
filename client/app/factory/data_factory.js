angular.module('app').factory('DataFactory', ['$http', 'API_URL', function ($http, API_URL ) {
return {
        all:function (areas) {
           return  $http.post(API_URL + 'data', areas);
        }
    }
}]); 