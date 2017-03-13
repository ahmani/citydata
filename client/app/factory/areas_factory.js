angular.module('app').factory('AreaFactory', ['$http', 'API_URL', function ($http, API_URL ) {
return {
        all:function (families) {
           return  $http.post('http://localhost/citydata/api/rest/families/services', families);
        }
    }
}]);