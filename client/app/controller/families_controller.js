angular.module('app')
    .controller('FamiliesController',
    ['$scope', '$http', 'items',
    function($scope, $http, items) {

        $scope.GetChecked = function()
        {
          if($scope.check_markers)
            items.savefunction()
          else
            items.removefunction()
        }

  }]);
