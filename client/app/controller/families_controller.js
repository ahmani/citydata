angular.module('app')
    .controller('FamiliesController',
    ['$scope', '$http', 'items', 'VeloFactory',
    function($scope, $http, items, VeloFactory) {
      
        
        $scope.GetChecked = function()
        {
          if($scope.check_markers)
            items.savefunction()
              if($scope.velo)
                items.velosfunction()
          if($scope.check_markers == false)
            items.removefunction()
        }


        $scope.GetVelo = function()
        {
           
         
        }

      

  }]);
