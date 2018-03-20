"use strict";


angular.module("BenApp").controller("HomeCtrl", function($scope, $location, $window, AnimaFactory) {
    
    $scope.about = ()=>{
        $location.url("/about");
    };

    $scope.projects = ()=>{
        $location.url("/projects");
    };

    AnimaFactory.onload();     
});