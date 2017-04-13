var module = angular.module("myApp", []);
module.controller("hourCtrl", hourFunc);
module.controller("timeCtrl", timeFunc);

function timeFunc($scope) {
    var currentdate = new Date();
    $scope.timeString = currentdate.toTimeString();
    $scope.newTime=12/23/17;
    $scope.updateTime = function (){
         var currentdate = new Date();
         $scope.timeString = currentdate.toTimeString();
         console.log($scope.newTime);
    }
}

function hourFunc($scope) {
    console.log(angular);
    $scope.hourOfDay = 9;
}
