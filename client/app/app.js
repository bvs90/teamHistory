angular.module('teamHistory', [
  'ui.router',
  'ngAnimate',
  
  // Internal Module Dependency
  'app.controllers',
  'app.services',
  'app.components',
  'app.vendor'
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home.html',
        controller: 'HomeCtrl as homeCtrl'
      })
      .state('stats', {
        url: '/stats',
        templateUrl: 'app/views/main-stats.html',
        controller: 'StatsCtrl as statsCtrl'   
      });
  
}]);
