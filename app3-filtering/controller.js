angular.module("myApp").controller("mainCtrl",function($scope, mainSvc){
  $scope.employees = mainSvc.getEmployees();
});
