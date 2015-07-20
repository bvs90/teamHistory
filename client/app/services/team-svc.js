angular.module('srcModule')

.service('TeamSvc', ['$window', '$q', function($window, $q) {
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
