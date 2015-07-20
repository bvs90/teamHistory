describe('thTeamPicker', function() {
  var fakeTeamSvc;
  
  fakeTeamSvc = {
    setTeam : angular.noop,
    getTeam : angular.noop
  };
  
  beforeEach(module('srcModule'));
  
  beforeEach(inject(function($controller) {
    teamPickerCtrl = $controller('TeamPickerCtrl', {
      TeamSvc : fakeTeamSvc
    });
  }));
  
  it('should set the picked team', function() {
    spyOn(teamPickerCtrl, 'setTeam');
    
    var fakeTeam = 'team';
    
    teamPickerCtrl.selectTeam(fakeTeam);
    expect(teamPickerCtrl.setTeam).toHaveBeenCalledWith(fakeTeam);
  });
  
});
