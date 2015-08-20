describe('TeamSvc', function() {
  var fakeTeam;
  
  fakeTeam = 'fakeTeam';
  
  beforeEach(module('app.services.teamSvc'));
  
  beforeEach(inject(function(_TeamSvc_, _$window_) {
    teamSvc = _TeamSvc_;
    $window = _$window_; 
  }));
  
  it('should set the current team to session storage', function() {
    teamSvc.setTeam(fakeTeam);
    var currentTeam = window.sessionStorage.getItem('currentTeam');
    
    expect(currentTeam).toBe(fakeTeam);
  });
  
  it('should get the current team from session storage', function() {
    teamSvc.setTeam(fakeTeam);
    var currentTeam = teamSvc.getTeam();
    
    expect(currentTeam).toBe(fakeTeam);
  });
  
});
