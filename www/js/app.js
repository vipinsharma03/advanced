

var sampleapp=angular.module('sampleApp', ['ngRoute'])

.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
      when('/abc', {
          templateUrl: 'View/Home.html',
          controller: 'HomeContoller'
      }).
      when('/add', {
          templateUrl: 'View/add_order.html',
          controller: 'test'
      }).    
      otherwise({
      
          redirectTo: '/abc'
      });
  } ]);


  sampleapp.controller('test', function ($scope) {
      $scope.go = function (path) {
          $location.path(path);
      };
  })

  sampleapp.controller('HomeContoller', function ($scope) {

      $scope.menu = [];
      $scope.menu.push(
      {
      text:'View'
  })
  $scope.menu.push(
      {
          text: 'Edit'
      })
      

  });

