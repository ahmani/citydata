angular.module('app')
    .controller('FamiliesController',
    ['$scope', '$http',
    function($scope, $http) {

      $http.get('http://localhost/citydata/api/rest/families').then(function(response) {
        $scope.familiesList = [];
        response.data.forEach(function(data) {
          $scope.familiesList.push(data);
        });

        $scope.selected = {
            families: []
        };

        $scope.checkAll = function() {
           $scope.selected.families = angular.copy($scope.familiesList);
        };

        $scope.uncheckAll = function() {
            $scope.selected.families = [];
        };

      },
      function(error) {
        console.log(error);
      });

      $scope.changeFamilies = function() {
        $http.post('http://localhost/citydata/api/rest/families/services', JSON.stringify($scope.selected.families)).then(function(response) {
          console.log(response);
        },
        function(error) {
          console.log(error);
        });

      };

  }]);
