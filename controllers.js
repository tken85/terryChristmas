(function() {
  'use strict';

  angular
    .module('shoppah')
    .controller('MainController', function($scope){

    })
    .controller('AdminController', function($scope, $routeParams, AdminService){

      AdminService.getProducts().success(function(products){
        $scope.products = products;
      });

      $scope.addProduct = function(product){
        product.reviews = [];
        AdminService.createProduct(product);
      };
    })
    .controller('ShopperController', function($scope, $routeParams, ShopperService){
      ShopperService.getProducts().success(function(products){
        $scope.products = products;
      });
      
    });
}());
