'use strict';

angular.module('app.services.teamDataSvc', [])

.service('TeamDataSvc', [function() {
  var TeamData = this;
  
  TeamData.fetchTeamData = function(team) {
    console.log('Team is now', team);
    // make http request for data for new team 
    // have directives listen for changes to their data and then update 
  };
  
}])

;
