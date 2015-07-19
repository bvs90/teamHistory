angular.module('srcModule')

.service('TeamSvc', ['$window', function($window) {
  var teamSvc = this;

  teamSvc.setTeam = function(team) {
    $window.sessionStorage.setItem('currentTeam', team);
  };  
  
  teamSvc.getTeam = function() {
    return $window.sessionStorage.getItem('currentTeam');
  };
  
}])

;
