// External Dependencies
var path = require('path');
var Q = require('q');

var dataCtrl = require('./controllers/data-controller');

module.exports = function(app) {
  
  app.get('/api/top-scorers/:team', function(req, res) {
    dataCtrl.getTopScorers(req).then(function(topScorers) {
      res.json(topScorers);
    });
  });
  
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../client/index.html'));
  });
};

