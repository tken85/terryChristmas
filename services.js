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

      var addToCart = function(){

      };

      var getProducts = function(){
        return $http.get(url);
      };
      var getSingleProduct = function(){

      };

      var removeFromCart = function(){

      };
      var calculateTotal = function(){

      };
      var addReview = function(){

      };
      var checkOut = function(){

      };

      return {
        getProducts: getProducts
      };
    });

}());
