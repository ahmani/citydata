angular.module('app')
    .controller('FamiliesController',
    ['$scope', '$http', 'items', 'VeloFactory',
    function($scope, $http, items, VeloFactory) {

        $scope.markers_checked = true
        $scope.velo_checked = false


        $scope.$watch(function(){
            return $scope.check_markers;
        }, function(){
            $scope.markers_checked = $scope.check_markers
        },true);

        $scope.GetChecked = function()
        {
          $scope.markers_checked = $scope.check_markers
          if($scope.check_markers)
              items.savefunction()
          if($scope.velo)
            {
              items.velosfunction()
              $scope.velo_checked = true
            }
            

          if($scope.check_markers == false)
            items.removefunction()
        }

        $scope.GetCheckedStation = function()
        {
          if($scope.station)
            items.stationsfunction();
          if($scope.station == false)
            items.removefunction();
        }


  }]);
