require('babel-register')

var env = process.env.NODE_ENV || 'local'

if (env === 'production') {
	require('./server.prod')
} else {
	require('./server.dev')
}