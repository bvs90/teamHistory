describe('TeamPicker', function() {
  var fakeTeamSvc,
      fakeTeam;
  
  fakeTeam = 'team';
  
  fakeTeamSvc = {
    setTeam     : angular.noop,
    getTeam     : function() {
      return fakeTeam;
    },
    getTeamList : angular.noop
  };
  
  beforeEach(module('app.components.teamPicker'));

  beforeEach(inject(function($controller) {
    teamPickerCtrl = $controller('TeamPickerCtrl', {
      TeamSvc : fakeTeamSvc
    });
  }));
  
  it('should be intialised with the selected team', function() {
    expect(teamPickerCtrl.selectedTeam).toBe(fakeTeam);    
  });
  
  it('should set the picked team', function() {
    spyOn(teamPickerCtrl, 'setTeam');
    
    teamPickerCtrl.selectTeam(fakeTeam);
    expect(teamPickerCtrl.setTeam).toHaveBeenCalledWith(fakeTeam);
  });
  
});
