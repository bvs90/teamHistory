'use strict';

describe('TeamPicker', function() {
  var teamPickerCtrl,
      fakeTeamSvc,
      fakeTeamDataSvc,
      fakeTeam;
  
  fakeTeam = 'team';
  
  fakeTeamSvc = {
    setTeam     : angular.noop,
    getTeam     : function() {
      return fakeTeam;
    },
    getTeamList : angular.noop
  };
  
  fakeTeamDataSvc = {
    fetchTeamData : angular.noop
  };
  
  beforeEach(module('app.components.teamPicker'));

  beforeEach(inject(function($controller) {
    teamPickerCtrl = $controller('TeamPickerCtrl', {
      TeamSvc : fakeTeamSvc,
      TeamDataSvc : fakeTeamDataSvc
    });
  }));
  
  it('should be intialised with the selected team', function() {
    expect(teamPickerCtrl.selectedTeam).toBe(fakeTeam);    
  });
  
  describe('selectTeam method', function() {
    it('should set the selected team to session storage', function() {
      spyOn(teamPickerCtrl, 'setTeam');
      
      teamPickerCtrl.selectTeam(fakeTeam);
      expect(teamPickerCtrl.setTeam).toHaveBeenCalledWith(fakeTeam);
    });
    
    it('should update the selected team', function() {
      var otherTeam = 'otherTeam';
      
      teamPickerCtrl.selectTeam(otherTeam);
      expect(teamPickerCtrl.selectedTeam).toBe(otherTeam);
    });
    
    it('should initiate a request for data', function() {
      spyOn(fakeTeamDataSvc, 'fetchTeamData');
      
      teamPickerCtrl.selectTeam(fakeTeam);
      expect(fakeTeamDataSvc.fetchTeamData).toHaveBeenCalledWith(fakeTeam);
    });    
    
  });
  
});
