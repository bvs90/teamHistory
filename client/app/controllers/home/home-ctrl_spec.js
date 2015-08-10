fdescribe('HomeCtrl', function() {
  var homeCtrl,
      fakeTeamSvc;
  
  fakeTeamSvc = {
    setTeam     : angular.noop,
    getTeamList : function() {
      return ['team1', 'team2', 'team3'];   
    }
  };
  
  beforeEach(module('app.controllers.homeCtrl'));
  beforeEach(module('app.vendor'));

  beforeEach(inject(function($controller) {
    homeCtrl = $controller('HomeCtrl', {
      TeamSvc : fakeTeamSvc
    });
  }));
  
  it('should be intialised with a setTeam method', function() {
    expect(homeCtrl.setTeam).toBe(fakeTeamSvc.setTeam);    
  });
  
  it('should be intialised with a list of teams', function() {
    expect(homeCtrl.teamList.length).toBe(3);    
  });
  
});
