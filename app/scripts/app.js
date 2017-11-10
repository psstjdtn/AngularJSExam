'use strict';

/**
 * @ngdoc overview
 * @name angularJsexamApp
 * @description
 * # angularJsexamApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsexamApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',

  ])
  .config(function ($stateProvider, $urlRouterProvider, $routeProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('main', {
        url:'/',
        templateUrl:'views/main.html',
        controller:'MainCtrl'
      })
      .state('menuManage', {
        url:'/menu/',
        templateUrl:'views/menuManage.html',
        controller:'MenuManageCtrl'
      })
      .state('order', {
        url:'/order/biz/list/',
        templateUrl:'views/order.html',
        controller:'OrderCtrl'
      })
      .state('businessInfo', {
        url:'/users/biz/',
        templateUrl:'views/businessInfo.html',
        controller:'BusinessInfoCtrl'
      })
      .state('userMenu', {
        url:'/usermenu/',
        templateUrl:'views/user-menu.html',
        controller:'UserMenuCtrl'
      })
    

    /*$routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });*/
  });
