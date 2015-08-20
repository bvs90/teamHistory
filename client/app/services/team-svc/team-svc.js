'use strict';

angular.module('app.services.teamSvc', [])

.service('TeamSvc', ['$window', function($window) {
  var teamSvc = this;
  
  teamSvc.getTeam = function() {
    var team = $window.sessionStorage.getItem('currentTeam');
    
    return team;
  };
  
  teamSvc.setTeam = function(team) {
    $window.sessionStorage.setItem('currentTeam', team);
  };  
  
  teamSvc.teamList = [
    { teamName      : 'Arsenal', 
      teamNameShort : 'ARS' },
    { teamName      : 'Aston Villa', 
      teamNameShort : 'ASV' },
    { teamName      : 'Bournemouth', 
      teamNameShort : 'BOU' },
    { teamName      : 'Chelsea', 
      teamNameShort : 'CHE' },
    { teamName      :'Crystal Palace', 
      teamNameShort : 'CPA' },
    { teamName      : 'Everton', 
      teamNameShort : 'EVT' },
    { teamName      : 'Leicester City', 
      teamNameShort : 'LEI' },
    { teamName      : 'Liverpool', 
      teamNameShort : 'LIV' },
    { teamName      : 'Manchester City', 
      teamNameShort : 'MCY' },
    { teamName      : 'Manchester United', 
      teamNameShort : 'MUN' },
    { teamName      : 'Newcastle United', 
      teamNameShort : 'NEW' },
    { teamName      : 'Norwich City', 
      teamNameShort : 'NOR' },
    { teamName      : 'Southampton', 
      teamNameShort : 'SOU' },
    { teamName      : 'Stoke City', 
      teamNameShort : 'STO' },
    { teamName      : 'Sunderland', 
      teamNameShort : 'SUN' },
    { teamName      : 'Swansea City', 
      teamNameShort : 'SWA' },
    { teamName      : 'Tottenham Hotspur', 
      teamNameShort : 'TOT' },
    { teamName      : 'Watford', 
      teamNameShort : 'WAT' },
    { teamName      : 'West Bromwich Albion', 
      teamNameShort : 'WBA' },
    { teamName      : 'West Ham United', 
      teamNameShort : 'WHU' },
  ];
  
  teamSvc.getTeamList = function() {
     return teamSvc.teamList; 
  };
    
}])

;
