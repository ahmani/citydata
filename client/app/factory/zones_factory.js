angular.module('app').factory('ZoneFactory', ['$http', 'API_URL', function ($http, API_URL ) {
return {
        all:function () {
           return $http.get('http://localhost/citydata/api/rest/zones/services/count');
        }
    }
}]);