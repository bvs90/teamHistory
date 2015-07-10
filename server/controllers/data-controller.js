var databaseDao = require('../services/database-dao');

var dataCtrl = {};

dataCtrl.getTopScorers = function(req) {
  return databaseDao.get('TopScorers', req.params.team);
};

module.exports = dataCtrl;
