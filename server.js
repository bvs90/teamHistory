var express = require('express'),
    app     = express();

var port = process.env.PORT || 3500;

app.use(express.static(__dirname + '/client'));

require('./server/routes')(app);

app.listen(port);
console.log('Server listening on port: ' + port);
    
