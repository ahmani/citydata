angular.module('app').factory('VeloFactory', ['$http', 'API_URL', function ($http, API_URL ) {
return {
        all:function () {
           return $http.get('https://api.jcdecaux.com/vls/v1/stations?contract=nancy&apiKey=801188c19e7409afd9d5987c3cd57fef3a07fdb7');
        }
    }
}]);