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

      ShopperService.getCart().success(function(cartItems){
        $scope.cartItems = cartItems;
      });

      if($routeParams.productId){
        ShopperService.getSingleProduct($routeParams.productId).success(function(singleProduct){
          console.log(singleProduct);
          $scope.singleProduct = singleProduct;
        });
      }
      $scope.addToCart = function(newProduct){
        newProduct.total = newProduct.price * newProduct.quantity;
        delete newProduct._id;

        ShopperService.addToCart(newProduct);

      };

      $scope.removeFromCart = function(productId){
        console.log(productId);
        ShopperService.removeFromCart(productId);
      };
      $scope.reviewProduct = function(reviewedProduct, review){
        reviewedProduct.reviews.push(review);
        ShopperService.reviewProduct(reviewedProduct);
      };
    });
}());
