angular.module('app').factory('PublicAreasFactory', ['$http', 'API_URL', function ($http, API_URL ) {
return {
        all:function () {
           return $http.get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=contours-iris-2014&q=Nancy&rows=50&sort=iris&facet=nom_dept&facet=nom_region&refine.nom_com=Nancy&exclude.code_region=21&exclude.code_region=41');
        }
    }
}]);