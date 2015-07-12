angular.module('teamHistory', [
  'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/views/home.html'
      })
      .state('stats', {
        url: '/stats/:team',
        template: '<h1>Now on the stats page</h1>'       
      });
  
  }])
;
