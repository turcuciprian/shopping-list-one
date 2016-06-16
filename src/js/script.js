(function() {
    //debug variable
    var debug = true;
    //The main module
    var pcs = angular.module('wpPCS', ['ui.bootstrap', 'ngAnimate', 'ngStorage']);
    // pcs.run(function($rootScope, $templateCache) {
    //     $rootScope.$on('$viewContentLoaded', function() {
    //         $templateCache.removeAll();
    //     });
    // });
    if (debug) {
        console.log('Module wpPCS initiated');
    }

    var mainCtrl = pcs.controller('mainCtrl', ['$scope', '$log', '$http', '$localStorage', function($scope, $log, $http, $localStorage) {
        if (debug) {
            console.log('inside controller');
        }
        $scope.mainArr = [];
        $scope.pcsExport = function(){
          if(debug){
            console.log('Export button clicked!');
          }

          var pName = (typeof $scope.pName !== 'undefined' ? $scope.pName : 'Plugin Name');
          var pURL = (typeof $scope.pURL !== 'undefined' ? $scope.pURL : 'http://admin-builder.com');
          var pDescription = (typeof $scope.pDescription !== 'undefined' ? $scope.pDescription : 'Default Plugin Description');
          var pVersion = (typeof $scope.pVersion !== 'undefined' ? $scope.pVersion : 'Default Plugin Description');
          var pAuthor = (typeof $scope.pAuthor !== 'undefined' ? $scope.pAuthor : 'authorUserName');
          var pAuthorURL = (typeof $scope.pAuthorURL !== 'undefined' ? $scope.pAuthorURL : 'http://admin-builder.com');
          var pLicense = (typeof $scope.pLicense !== 'undefined' ? $scope.pLicense : 'GPLv2');
          var pTextDomain = (typeof $scope.pTextDomain !== 'undefined' ? $scope.pTextDomain : 'ab');

          var final ='<?php';
          final +='\n/*';
            final +='\nPlugin Name: '+pName;
            final +='\nPlugin URI: '+pURL;
            final +='\nDescription: '+pDescription;
            final +='\nVersion: '+pVersion;
            final +='\nAuthor: '+pAuthor;
            final +='\nAuthor URI: '+pAuthorURL;
            final +='\nLicense: '+pLicense;
            final +='\nText Domain: '+pTextDomain;
           final +='\n*/';
           console.log(final);

           var fileName = pName.replace(new RegExp(' ', 'g'), '-').toLowerCase();//'Your-plugin-name';//$scope.pName.replace(' ','-');
           var link = document.createElement('a');

           link.setAttribute('download', fileName+'.php');
           link.setAttribute('href', 'data:' + 'text;data:attachment/php;charset=utf-8,' + encodeURIComponent(final));
           // window.open("text;data:attachment/php;charset=utf-8," + encodeURIComponent(elHtml));
           link.click();

        };


    }]);
})();
