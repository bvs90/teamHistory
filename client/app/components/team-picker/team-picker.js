'use strict';

angular.module('app.components.teamPicker', [])

.directive('teamPicker', [function() {
  return {
    restrict: 'E',
    templateUrl: '/app/components/team-picker/team-picker.html',
    controller: 'TeamPickerCtrl as teamPickerCtrl'
  };
}])

.controller('TeamPickerCtrl', ['TeamSvc', 'TeamDataSvc', function(TeamSvc, TeamDataSvc) {
  var teamPickerCtrl = this;

  teamPickerCtrl.setTeam = TeamSvc.setTeam;
  
  teamPickerCtrl.selectedTeam = TeamSvc.getTeam();
  
  teamPickerCtrl.selectTeam = function(team) {
    teamPickerCtrl.setTeam(team);
    teamPickerCtrl.selectedTeam = team;
    TeamDataSvc.fetchTeamData(team);
  };  

  teamPickerCtrl.teams = TeamSvc.getTeamList();
     
}])

;

