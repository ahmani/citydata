angular.module('app').factory('AreaFactory', ['$http', 'API_URL', function ($http, API_URL ) {
return {
        all:function (families) {
           return  $http.post(API_URL+'families/services', families);
        }
    }
}]);
