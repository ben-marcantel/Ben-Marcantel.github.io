"use strict";

angular.module("BenApp").controller("AboutCtrl", function($scope, $location, $window, ExpFactory){
    
    $scope.home = ()=>{
        $location.url("/home");
    };

    $scope.projects = ()=>{
        $location.url("/projects");
    };

    ExpFactory.workExp();
    
});