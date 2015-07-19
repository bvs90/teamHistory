angular.module('srcModule')

.controller('PickTeamCtrl', ['TeamSvc', function(TeamSvc) {
  var pickTeamCtrl = this;
  
  pickTeamCtrl.setTeam = TeamSvc.setTeam;
  
  pickTeamCtrl.selectTeam = function(team) {
    pickTeamCtrl.setTeam(team);
  };
  
}]);
