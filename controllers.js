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

      if($routeParams.productId){
        AdminService.getSingleProduct($routeParams.productId).success(function(singleProduct){
          console.log(singleProduct);
          $scope.singleProduct = singleProduct;
        });
      }
      $scope.addProduct = function(product){
        product.reviews = [];
        AdminService.createProduct(product);
      };

      $scope.deleteProduct = function(productId){
        AdminService.deleteProduct(productId);
      };

      $scope.updateProduct = function(updatedProduct){
        AdminService.updateProduct(updatedProduct);
      };
    })
    .controller('ShopperController', function($scope, $routeParams, ShopperService){
      ShopperService.getProducts().success(function(products){
        $scope.products = products;
      });

    });
}());
