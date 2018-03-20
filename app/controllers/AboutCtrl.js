"use strict";

angular.module("BenApp").controller("AboutCtrl", function($scope, $location, $window) {
    
    $scope.home = ()=>{
        $location.url("/home");
    };

    $scope.projects = ()=>{
        $location.url("/projects");
    };

    
});