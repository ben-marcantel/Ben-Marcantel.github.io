"use strict";

angular.module("BenApp").controller("AboutCtrl", function($scope, $location, $window, ExpFactory){
    
    $scope.home = ()=>{
        $location.url("/home");
    };

    $scope.projects = ()=>{
        $location.url("/projects");
    };

    $scope.story = ExpFactory.workExp();
    $scope.story2 = ExpFactory.workExp2();
    
});