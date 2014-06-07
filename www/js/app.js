

var sampleapp=angular.module('sampleApp', ['ngRoute'])

.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
      when('/abc', {
          templateUrl: 'View/Home.html',
          controller: 'HomeContoller'
      }).      
      otherwise({
      
          redirectTo: '/abc'
      });
  } ]);


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

