var express         = require('express');

var port = process.env.PORT || 7000
var environment = process.env.NODE_ENV || 'development'

var app = express();

app.use('/', express.static(__dirname + '/dist'));
app.use('*', express.static(__dirname + '/dist/index.html'));

app.listen(port, function () {
	console.log('\n')
	console.log('=============================================================')
    console.log('Server online. Port:', port, ' Environment:', environment)
	console.log('=============================================================')
	console.log('\n')
});