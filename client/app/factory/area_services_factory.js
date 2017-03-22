angular.module('app').factory('ServicesFactory', ['$http', 'API_URL', function ($http, API_URL ) {
return {
        ServicesByArea:function (id) {
           return $http.get(API_URL+'areas/'+ id +'/services');
        }
    }
}]);