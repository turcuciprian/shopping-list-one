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
        //calculate total
        $scope.calculate = function() {
          $scope.total = 0;

            $scope.products.forEach(function(item){
              $scope.total += (item.quantity*item.price);
            });
            $scope.saveProducts();
        };
        $scope.loadProducts = function() {
            var products = $localStorage.products;
            if (typeof products !== 'undefined') {
                $scope.products = $localStorage.products;
            }
        };
        $scope.loadProducts();
        
        $scope.clearProducts = function(){
          $scope.products = [];
          $localStorage.products = [];
        };
        $scope.saveProducts = function(){
          $localStorage.products = $scope.products;
          console.log($localStorage.products);
        };


    }]);
})();
