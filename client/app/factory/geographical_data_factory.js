angular.module('app').factory('GeographicalData', ['$http', 'API_URL', function ($http, API_URL ) {
return {
        AddData:function (data) {
           return $http.post(API_URL+'geographical-data',data);
        }
    }
}]);