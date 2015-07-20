angular.module('srcModule')

.directive('teamPicker', [function() {
  return {
    restrict: 'E',
    templateUrl: '/app/components/team-picker/team-picker.html',
    controller: 'TeamPickerCtrl as teamPickerCtrl'
  };
}])

.controller('TeamPickerCtrl', ['TeamSvc', function(TeamSvc) {
  var teamPickerCtrl = this;

  teamPickerCtrl.setTeam = TeamSvc.setTeam;
  
  teamPickerCtrl.selectedTeam = TeamSvc.getTeam();

  teamPickerCtrl.selectTeam = function(team) {
    teamPickerCtrl.setTeam(team);
    teamPickerCtrl.selectedTeam = team;
  };  

  teamPickerCtrl.teams = [
    { teamName: 'Arsenal', teamNameShort: 'ARS'},
    { teamName: 'Aston Villa', teamNameShort: 'ASV'},
    { teamName: 'Bournemouth', teamNameShort: 'BOU'},
    { teamName: 'Chelsea', teamNameShort: 'CHE'},
    { teamName: 'Crystal Palace', teamNameShort: 'CPA'},
    { teamName: 'Everton', teamNameShort: 'EVT'},
    { teamName: 'Leicester City', teamNameShort: 'LEI'},
    { teamName: 'Liverpool', teamNameShort: 'LIV'},
    { teamName: 'Manchester City', teamNameShort: 'MCY'},
    { teamName: 'Manchester United', teamNameShort: 'MUN'},
    { teamName: 'Newcastle United', teamNameShort: 'NEW'},
    { teamName: 'Norwich City', teamNameShort: 'NOR'},
    { teamName: 'Southampton', teamNameShort: 'SOU'},
    { teamName: 'Stoke City', teamNameShort: 'STO'},
    { teamName: 'Sunderland', teamNameShort: 'SUN'},
    { teamName: 'Swansea City', teamNameShort: 'SWA'},
    { teamName: 'Totenham Hotspur', teamNameShort: 'TOT'},
    { teamName: 'Watford', teamNameShort: 'WAT'},
    { teamName: 'West Bromwich Albion', teamNameShort: 'WBA'},
    { teamName: 'West Ham United', teamNameShort: 'WHU'},
  ];

     
}])

;

