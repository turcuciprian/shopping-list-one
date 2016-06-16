(function() {
    //debug variable
    var debug = true;
    //The main module
    var pcs = angular.module('slo', ['ui.bootstrap', 'ngAnimate', 'ngStorage']);
    // pcs.run(function($rootScope, $templateCache) {
    //     $rootScope.$on('$viewContentLoaded', function() {
    //         $templateCache.removeAll();
    //     });
    // });
    if (debug) {
        console.log('Module slo initiated');
    }

    var mainCtrl = pcs.controller('mainCtrl', ['$scope', '$log', '$http', '$localStorage', function($scope, $log, $http, $localStorage) {
        if (debug) {
            console.log('inside controller');
        }
        $scope.products = [];
        $scope.total = 0;
        $scope.addProduct = function(){
          var newProduct = {
            name: '',
            quantity: 1,
            price: null,
          };
          $scope.products.push(newProduct);
        };
        //calculate total
        $scope.pcsExport = function(){
          if(debug){
            console.log('Export button clicked!');
          }

          var pName = (typeof $scope.pName !== 'undefined' ? $scope.pName : 'Plugin Name');



        };


    }]);
})();
