
angular.module('app').factory('FamiliesFactory', ['$http', 'API_URL', function ($http, API_URL ) {
return {
        all:function () {
           return  $http.get(API_URL + 'families');
        }
    }
}]);