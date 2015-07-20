angular.module('srcModule')

.controller('HomeCtrl', ['$rootScope', 'TeamSvc', function($rootScope, TeamSvc) {
  var homeCtrl = this;

  homeCtrl.setTeam = TeamSvc.setTeam;

  homeCtrl.selectTeam = function(team) {
    homeCtrl.setTeam(team);
  };
}])
;
