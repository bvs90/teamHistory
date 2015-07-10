var express  = require('express'),
    app      = express();
    
var databaseDao = require('./server/services/database-dao');

var port = process.env.PORT || 3500;

databaseDao.connect('mongodb://localhost:27017/team-history');

app.use(express.static(__dirname + '/client'));

require('./server/routes')(app);

app.listen(port);
console.log('Server listening on port: ' + port);
    
