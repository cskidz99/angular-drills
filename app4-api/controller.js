angular.module("apiApp").controller("mainCtrl", function($scope, mainSvc){
  $scope.ships = mainSvc.getShipInfo().then(function(ships){
    $scope.ships = ships;
  })
})
