require('babel-register')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'production') {
	console.log('enter production server here')
} else {
	require('./server.dev')
}