var MongoClient = require('mongodb').MongoClient,
    Q           = require('q');

var DatabaseDao = {
  db : null
};

DatabaseDao.connect = function(url) {
  var deferred = Q.defer(),
      _this = this;
  
  MongoClient.connect(url, function(err, db) {
    if (err) { console.log(err); }
    _this.db = db;
    deferred.resolve(db);
  });
  
  return deferred.promise;
};

DatabaseDao.get = function(collectionName, teamNameShort) {
  var deferred = Q.defer();
  
  var collection = getCollection(collectionName),
      query = { teamNameShort: teamNameShort}; 
  
  collection.findOne(query, function(err, doc) {
    if (err) { console.log(err); }
    deferred.resolve(doc);
  });
  
  return deferred.promise;
};

function getCollection(collectionName) {
  return DatabaseDao.db.collection(collectionName);
}

module.exports = DatabaseDao;
