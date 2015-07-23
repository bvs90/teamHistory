angular.module('srcModule')

.controller('HomeCtrl', ['TeamSvc', function(TeamSvc) {
  var homeCtrl = this;

  homeCtrl.setTeam = TeamSvc.setTeam;

  homeCtrl.selectTeam = function(team) {
    homeCtrl.setTeam(team);
  };
}])
;
