angular.module('srcModule')

.controller('HomeCtrl', ['TeamSvc', function(TeamSvc) {
  var homeCtrl = this;

  homeCtrl.setTeam = TeamSvc.setTeam;

  homeCtrl.selectTeam = function(team) {
    homeCtrl.setTeam(team);
  };
  
  homeCtrl.teamList = [
    [
      { teamName: 'Arsenal', teamShort: 'ARS'},
      { teamName: 'Aston_Villa', teamShort: 'ASV'},
      { teamName: 'Bournemouth', teamShort: 'BOU'},
      { teamName: 'Chelsea', teamShort: 'CHE'},
      { teamName: 'Crystal_Palace', teamShort: 'CPA'},
      { teamName: 'Everton', teamShort: 'EVT'},
      { teamName: 'Leicester_City', teamShort: 'LEI'},
      { teamName: 'Liverpool', teamShort: 'LIV'}
    ],
    [
      { teamName: 'Manchester_City', teamShort: 'MCY'},
      { teamName: 'Manchester_United', teamShort: 'MUN'}
    ],
    [
      { teamName: 'Newcastle_United', teamShort: 'NEW'},
      { teamName: 'Norwich_City', teamShort: 'NOR'}      
    ],
    [
      { teamName: 'Southampton', teamShort: 'SOU'},
      { teamName: 'Stoke_City', teamShort: 'STK'},
      { teamName: 'Sunderland', teamShort: 'SUN'},
      { teamName: 'Swansea_City', teamShort: 'SWA'},
      { teamName: 'Tottenham_Hotspur', teamShort: 'TOT'},
      { teamName: 'Watford', teamShort: 'WAT'},
      { teamName: 'West_Bromwich_Albion', teamShort: 'WBA'},
      { teamName: 'West_Ham_United', teamShort: 'WHU'}      
    ]
  ];
  
  
}])
;
