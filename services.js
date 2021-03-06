(function() {
  'use strict';

  angular
    .module('shoppah')
    .factory('AdminService', function($http, _){
      var url = "http://tiny-tiny.herokuapp.com/collections/terryChristmas";

      var addProduct = function(newProduct){
        $http.post(url, newProduct);
      };

      var getProducts = function(){
        return $http.get(url);
      };

      var getSingleProduct = function(productId){
        return $http.get(url + '/' + productId);
      };

      var deleteProduct = function(productId){
        return $http.delete(url + '/' + productId);
      };

      var updateProduct = function(updatedProduct){
        return $http.put(url + '/' + updatedProduct._id, updatedProduct);
      };

      return {
        createProduct: addProduct,
        getProducts: getProducts,
        getSingleProduct: getSingleProduct,
        deleteProduct: deleteProduct,
        updateProduct: updateProduct,
      };
    })
    .factory('ShopperService', function($http, _){

      var url = "http://tiny-tiny.herokuapp.com/collections/terryChristmas";
      var cartUrl = "http://tiny-tiny.herokuapp.com/collections/terryChristmasCart";

      var addToCart = function(newProduct){
        $http.post(cartUrl, newProduct);
      };

      var getProducts = function(){
        return $http.get(url);
      };

      var getSingleProduct = function(productId){
        return $http.get(url + '/' + productId);
      };

      var getCart = function(){
        return $http.get(cartUrl);
      };

      var removeFromCart = function(productId){
        return $http.delete(cartUrl + '/' + productId);
      };

      var calculateTotal = function(purchases){
        var total = 0;
        _.each(purchases, function(purchase){
          total += purchase.total;
        });
        return total;
      };

      var addReview = function(reviewedProduct){
        return $http.put(url + '/' + reviewedProduct._id, reviewedProduct);
      };
      var updateCart = function(updatedProduct){
        return $http.put(cartUrl + '/' + updatedProduct._id, updatedProduct);
      };
      var checkOut = function(cartItems){
        _.each(cartItems, function(currVal){
          $http.delete(cartUrl + '/' + currVal._id);
        });
      };

      return {
        addToCart: addToCart,
        getProducts: getProducts,
        getCart: getCart,
        getSingleProduct: getSingleProduct,
        removeFromCart: removeFromCart,
        reviewProduct: addReview,
        calculateTotal: calculateTotal,
        checkOut: checkOut,
        updateCart: updateCart,
      };
    });

}());
