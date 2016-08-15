var express = require('express')
var app = express()

app.get('/authentication', function(req, res) {
	res.send('Authenticated')
})

app.use(express.static(__dirname + '/dist'));
app.use('*', express.static(__dirname + '/dist/index.html'));

var port = process.env.PORT
app.listen(port, function() {
	console.log('Prism Application Server Online.')
})


