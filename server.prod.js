import express         		from 'express'
import path 				from 'path'

var app = express()


app.get('/authentication', function (req, res) {
	res.send('Authenticated')
})

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + 'dist/index.html'));


var port = process.env.PORT
app.listen(port, () => {
	console.log('===================================================================================')
	console.log(`Prism Application Server Online. Port: ${port}. Environment: ${process.env.NODE_ENV}`)
	console.log('===================================================================================')
})


