

var sampleapp=angular.module('sampleApp', ['ngRoute'])

.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
      when('/abc', {
          templateUrl: 'View/add_order.html',
          controller: 'AddOrderController'
      }).
      when('/ShowOrders', {
          templateUrl: 'View/show_orders.html',
          controller: 'ShowOrdersController'
      }).
      otherwise({
      
          redirectTo: '/abc'
      });
  } ]);


  sampleapp.controller('AddOrderController', function ($scope) {
      alert('hi');
      $scope.message = 'This is Add new order screen';

  });


sampleapp.controller('ShowOrdersController', function ($scope) {
 alert('hi1');
    $scope.message = 'This is Show orders screen';

});