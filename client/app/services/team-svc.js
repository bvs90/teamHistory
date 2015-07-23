angular.module('srcModule')

.service('TeamSvc', ['$window', function($window) {
  var teamSvc = this;
  
  teamSvc.getTeam = function() {
    var team = $window.sessionStorage.getItem('currentTeam');
    
    return team;
  };
  
  teamSvc.setTeam = function(team) {
    $window.sessionStorage.setItem('currentTeam', team);
  };  
    
}])

;
