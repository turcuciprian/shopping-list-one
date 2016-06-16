(function() {
    //debug variable
    var debug = true;
    //The main module
    var slo = angular.module('slo', ['ui.bootstrap', 'ngAnimate', 'ngStorage']);
    // pcs.run(function($rootScope, $templateCache) {
    //     $rootScope.$on('$viewContentLoaded', function() {
    //         $templateCache.removeAll();
    //     });
    // });
    if (debug) {
        console.log('Module slo initiated');
    }

    var mainCtrl = slo.controller('mainCtrl', ['$scope', '$log', '$http','$localStorage', function($scope, $log, $http,$localStorage) {
        if (debug) {
            console.log('inside controller');
        }
        $scope.products = [];
        $scope.total = 0;

        $scope.addProduct = function() {
            var newProduct = {
                name: '',
                quantity: 1,
                price: 0,
            };
            $scope.products.push(newProduct);
        };
        //save product data to local storage
        $scope.saveProducts = function(){
          $localStorage.products = $scope.products;
        };
        //calculate total
        $scope.calculate = function() {
          $scope.total = 0;

            $scope.products.forEach(function(item){
              $scope.total += (item.quantity*item.price);
            });
            $scope.saveProducts();
        };
        //load products data from local storage
        $scope.loadProducts = function() {
            var products = $localStorage.products;
            if (typeof products !== 'undefined') {
                $scope.products = $localStorage.products;
            }
            $scope.calculate();
        };
        $scope.loadProducts();
        //clear all products data
        $scope.clearProducts = function(){
          $scope.products = [];
          $localStorage.products = [];
        };
        //remove an item from the list
        $scope.remove = function(item) {
  var index = $scope.products.indexOf(item);
  $scope.products.splice(index, 1);
  $scope.calculate();
}



    }]);
})();
