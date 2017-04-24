/**
 *
 * Responsive website using AngularJS
 * http://www.script-tutorials.com/responsive-website-using-angularjs/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

'use strict';

// optional controllers
function HomeCtrl($scope, $http) {
}

function ProjectCtrl($scope, $http) {
}

function PrivacyCtrl($scope, $http, $timeout) {
}

function ServiciosCtrl($scope, $http, $timeout,$route) {

    $scope.init = function () {
      var serviceId=$route.current.params.serviceId;
    }

    $scope.init();
}

function ContactoCtrl($scope, $http, $timeout) {
}

function ProyectosCtrl($scope, $http, $timeout) {
}

function AboutCtrl($scope, $http, $timeout) {
}