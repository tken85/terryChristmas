(function() {
  'use strict';

  angular
    .module('shoppah',[
      'ngRoute',
      'underscore',
      'ui.bootstrap'
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/',{
          template: '<h1>Welcome to Terry Christmas</h1><a class="btn btn-default" href="#/admin">Log in as Admin</a><a class="btn btn-default" href="#/shopper">Log in as Customer</a>',
          controller: 'MainController'
        })
        .when('/admin',{
          templateUrl: 'views/admin/adminHome.html',
          controller: 'AdminController'
        })
        .when('/admin/addWish',{
          templateUrl: 'views/admin/create.html',
          controller: 'AdminController'
        })
        .when('/admin/viewWishes',{
          templateUrl: 'views/admin/wishList.html',
          controller: 'AdminController'
        })
        .when('/admin/viewWishes/:productId',{
          templateUrl: 'views/admin/show.html',
          controller: 'AdminController'
        })
        .when('/admin/viewWishes/:productId/edit',{
          templateUrl: 'views/admin/edit.html',
          controller: 'AdminController'
        })
        .when('/shopper',{
          templateUrl: 'views/shopper/shopperHome.html',
          controller: 'ShopperController'
        })
        .when('/shopper/viewWishes',{
          templateUrl: 'views/shopper/wishList.html',
          controller: 'ShopperController'
        })
        .when('/shopper/myCart',{
          templateUrl: 'views/shopper/cart.html',
          controller: 'ShopperController'
        })
        .when('/shopper/checkOut', {
          templateUrl: 'views/shopper/checkout.html',
          controller: 'ShopperController'
        })
        .when('/shopper/viewWishes/:productId/review',{
          templateUrl: 'views/shopper/review.html',
          controller: 'ShopperController'
        })
        .when('/404',{
          templateUrl: 'views/404.html',
          controller: 'MainController'
        })
        .otherwise({redirectTo: '/404'});

    });

    angular
      .module('underscore',[])
        .factory('_', function($window){
          return $window._;
        });

}());
