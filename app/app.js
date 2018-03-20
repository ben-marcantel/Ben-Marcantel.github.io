"use strict";

angular.module("BenApp", ["ngRoute"])
    .constant('_')
    .config($routeProvider=>{
    $routeProvider
    .when("/", {
        templateUrl: "/templates/partials/home.html",
        controller: "HomeCtrl",
    })
    .when("/about", {
        templateUrl: "/templates/partials/about.html",
        controller: "AboutCtrl", 
    })
    .when("/projects", {
        templateUrl: "/templates/partials/projects.html",
        controller: "PortCtrl", 
    })
    .otherwise("/");
    });


