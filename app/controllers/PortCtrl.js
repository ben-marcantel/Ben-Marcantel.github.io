"use strict";

angular.module("BenApp").controller("PortCtrl", function($scope, $location, $window) {
    
    $scope.about = ()=>{
        $location.url("/about");
    };

    $scope.home = ()=>{
        $location.url("/home");
    };
   
});