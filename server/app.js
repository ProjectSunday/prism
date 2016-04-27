var express         = require('express');
var bodyParser      = require('body-parser');
var http            = require('http');

var app = express();
var server = http.createServer(app);

require('./globals.js');  //must be first
require('./debug.js');
require('./core.js');
require('./mongo.js');

app.use(bodyParser.json());                                          // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));                  // to support URL-encoded bodies


require('./routes/main.route')(app);

app.use('/', express.static(__dirname + '/../dist'));
app.use('*', express.static(__dirname + '/../dist/index.html'));


server.listen(PRISM_PORT, function () {
    console.log('Server online. Port:', PRISM_PORT, ' Environment:', PRISM_ENVIRONMENT);
});