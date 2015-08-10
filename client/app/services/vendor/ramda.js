angular.module('app.vendor', [])

.service('R', ['$window', function($window) {
  var R = $window.R;
  
  return R;
}]);
