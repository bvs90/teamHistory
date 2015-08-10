angular.module('app.controllers.homeCtrl', [])

.controller('HomeCtrl', ['TeamSvc', 'R', function(TeamSvc, R) {
  var homeCtrl = this;

  homeCtrl.setTeam = TeamSvc.setTeam;
  
  homeCtrl.teamList = TeamSvc.getTeamList();
  
  homeCtrl.teams = [
    R.take(8, homeCtrl.teamList),
    R.slice(8,10, homeCtrl.teamList),
    R.slice(10,12, homeCtrl.teamList),
    R.takeLast(8, homeCtrl.teamList)
  ];
  
  homeCtrl.selectTeam = function(team) {
    homeCtrl.setTeam(team);
  };

}])

;
