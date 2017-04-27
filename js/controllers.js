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

function ServiciosCtrl($scope, $http, $timeout,$route, ngMeta, Socialshare) {
    if($route.current.params.serviceId) {
        switch($route.current.params.serviceId){
            case 'portales-internet':
                var title='PLP Comunicación - Portales Web';
                var description='Conoce la propuesta de diseño y programación que PLP Comunicación tienen para la creación de tu página web. Estamos en la Ciudad de México';
                var keywords='programación, diseño, portal web, México, agencia, página web, creación web';

                break;

            case 'creo':
                var title='PLP Comunicación - CREO';
                var description='Servicios de detección de crisis e indicadores de reputación de marca on line. Estrategia CREO exclusiva de PLP Comunicación ';
                var keywords='crisis, reputación , marca, marketing, marketing digital, solución, reputación de marca';
                break;

            case 'social-media':
                var title='PLP Comunicación - Estrategia en redes sociales y community manager ';
                var description='Diseño de estrategia de redes sociales por marca y mercado. Supervisión del trabajo de community manager y herramientas para su gestión ';
                var keywords='redes sociales, community manager, estrategia digital, comunicación, comunicación on line';
                break;

            case 'comercio-electronico':
                var title='PLP Comunicación | Creación de tienda on line en México';
                var description='Asesoría desde el inicio de la idea para la creación, funcionamiento e implementación de una tienda on line pensada en el mercado de México ';
                var keywords='comercio electrónico, tienda on line, tienda digital, e commerce, compra, venta productos';
                break;

            case 'publicidad-digital':
                var title='PLP Comunicación | Publicidad y campañas en redes sociales';
                var description='Paquetes de publicidad en redes sociales. PLP Comunicación se encarga de la administración del presupuesto y la elaboración de mensajes clave para la campaña digital de tu marca ';
                var keywords='publicidad digital, publicidad en redes sociales, adwords, adsense, campaña publicitaria, campaña en redes sociales';
                break;

            case 'contenido-web':
                var title='PLP Comunicación | Redacción de textos para página web';
                var description='Servicios de redacción de textos personalizados y de content marketing para páginas y portales web. Estrategia basada en posicionamIento en buscadores SEO ';
                var keywords='contenido, redacción, textos, content marketing, texto SEO, posicionamiento, contenido web';
                break;

            case 'cursos':
                var title='PLP Comunicación | Cursos de marketing, comunicación y estrategias de venta digital';
                var description=' Impartimos cursos de marketing y comunicación para proyectos digitales. Buscamos objetivos claros como las ventas, el branding y el reconocimiento digital. ';
                var keywords='cursos, talleres, marketing, comunicación, diseño, crisis, ux, redacción, digital, ventas';
                break;

            default :
                var title='PLP Comunicación | Servicios';
                var description='Conoce la propuesta de diseño y programación que PLP Comunicación tienen para la creación de tu página web. Estamos en la Ciudad de México ';
                var keywords='programación, diseño, portal web, México, agencia, página web, creación web';
                break;
        }

        ngMeta.setTitle(title);
        ngMeta.setTag('description',description);
        ngMeta.setTag('keywords',keywords);
        $scope.shareText=description;
        $scope.shareUrl=location.href;
    }else{
        var title='PLP Comunicación | Servicios';
        var description='Conoce la propuesta de diseño y programación que PLP Comunicación tienen para la creación de tu página web. Estamos en la Ciudad de México ';
        var keywords='programación, diseño, portal web, México, agencia, página web, creación web';

        ngMeta.setTitle(title);
        ngMeta.setTag('description',description);
        ngMeta.setTag('keywords',keywords);
        $scope.shareText=description;
        $scope.shareUrl=location.href;
    }
}

function ContactoCtrl($scope, $http, $timeout) {
}

function ProyectosCtrl($scope, $http, $timeout) {
}

function AboutCtrl($scope, $http, $timeout) {
}