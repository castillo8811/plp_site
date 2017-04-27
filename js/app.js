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

// angular.js main app initialization
var app = angular.module('plp', ['ngMeta', '720kb.socialshare']).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/',
          { templateUrl: 'pages/index.html',
              activetab: 'projects',
              controller: HomeCtrl,
              meta: {
                  'title': 'PLP Comunicación',
                  'titleSuffix': '',
                  'description': ' PLP Comunicación expertos en comunicación digital, diseño, ux, imagen crisis y reputación de marca on line. Agencia en CDMX',
                  'keywords':'programación, comunicación, diseño, crisis, ux, reputación de marca on line.'
              }
          }).
        when('/servicios/:serviceId', {
          templateUrl: 'pages/servicios.html',
          controller: ServiciosCtrl,
          activetab: 'servicios',
          meta: {
              'title': 'PLP Comunicación | Servicios',
              'titleSuffix': ' | Servicios',
              'description': 'Servicios'
          }
        }).
        when('/servicios', {
          templateUrl: 'pages/servicios.html',
          controller: ServiciosCtrl,
          activetab: 'servicios',
          meta: {
              'title': 'PLP Comunicación | Servicios',
              'description': 'Servicios'
          }
        }).
        when('/proyectos', {
           templateUrl: 'pages/proyectos.html',
           controller: ProjectCtrl,
           activetab: 'proyectos',
          meta: {
              'title': 'PLP Comunicación | Empresas',
              'description': 'Empresas'
          }
        }).
        when('/contacto', {
           templateUrl: 'pages/contacto.html',
           controller: ContactoCtrl,
           activetab: 'contacto',
          meta: {
              'title': 'PLP Comunicación | Contacto',
              'description': 'Contacto'
          }
        }).
        otherwise({ redirectTo: '/' });
    }]).run(['$rootScope', '$http', '$browser', '$timeout', "$route","ngMeta",'Socialshare', function ($scope, $http, $browser, $timeout, $route,ngMeta, Socialshare) {

        ngMeta.init();
  }]);

app.config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);

