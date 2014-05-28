
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, true);
    },

    onDeviceReady: function() {
        angular.element(document).ready(function() {
            angular.bootstrap(document);
        });
    },
};



//Define an angular module for our app
var sampleapp=angular.module('sampleApp', [])
.config(function ($compileProvider) {
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
      when('/AddNewOrder', {
          templateUrl: './add_order.html',
          controller: 'AddOrderController'
      }).
      when('/ShowOrders', {
          templateUrl: './show_orders.html',
          controller: 'ShowOrdersController'
      }).
      otherwise({
      
          redirectTo: '/AddNewOrder'
      });
  } ]);


  sampleapp.controller('AddOrderController', function ($scope) {
      //alert('hi');
      $scope.message = 'This is Add new order screen';

  });


sampleapp.controller('ShowOrdersController', function ($scope) {

    $scope.message = 'This is Show orders screen';

});