import express         		from 'express'
import webpack 				from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config               from './webpack.config.dev'

var app = express()
var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
	// hot: true,
	// historyApiFallback: { index: config.output.publicPath },
    publicPath: config.output.publicPath,
    stats: { chunks: false, colors: true }
}))

app.use(webpackHotMiddleware(compiler))

app.get('/authentication', function (req, res) {
	res.send('Authenticated')
})





var port = process.env.PORT || 7000
app.listen(port, () => {
	console.log('===================================================================================')
    console.log(`Prism Application Server Online. Port: ${port}. Environment: ${process.env.NODE_ENV}`)
	console.log('===================================================================================')
})


    // "start": "webpack-dev-server --progress --inline --hot",
