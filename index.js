require('babel-register')

process.env.NODE_ENV = process.env.NODE_ENV || 'local'

if (process.env.NODE_ENV === 'production') {
	require('./server.prod')
} else {
	require('./server.dev')
}