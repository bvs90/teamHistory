angular.module('teamHistory', [
  'ui.router',
  'ngAnimate'
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('pick-team', {
        url: '/',
        templateUrl: 'app/views/pick-team.html',
        controller: 'PickTeamCtrl as pickTeamCtrl'
      })
      .state('stats', {
        url: '/stats',
        templateUrl: 'app/views/main-stats.html',
        controller: 'StatsCtrl as statsCtrl'     
      });
  
  }])
;
