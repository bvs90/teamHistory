describe('PickTeamCtrl', function() {
  var fakeTeamSvc;
  
  fakeTeamSvc = {
    setTeam : angular.noop
  };
  
  beforeEach(module('srcModule'));
  
  beforeEach(inject(function($controller) {
    pickTeamCtrl = $controller('PickTeamCtrl', {
      TeamSvc : fakeTeamSvc
    });
  }));
  
  it('should set the picked team', function() {
    spyOn(pickTeamCtrl, 'setTeam');
    
    var fakeTeam = 'team';
    
    pickTeamCtrl.selectTeam(fakeTeam);
    expect(pickTeamCtrl.setTeam).toHaveBeenCalledWith(fakeTeam);
  });
  
});
