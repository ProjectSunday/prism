import express         		from 'express'
import path 				from 'path'
import webpack 				from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config               from './webpack.config.dev'

var app = express()
var compiler = webpack(config)

var devMiddleware = webpackDevMiddleware(compiler, {
	// hot: true,
	// historyApiFallback: { index: config.output.publicPath },
    publicPath: config.output.publicPath,
    stats: { chunks: false, colors: true }
})

app.use(devMiddleware)

app.use(webpackHotMiddleware(compiler))

app.get('/authentication', function (req, res) {
	res.send('Authenticated')
})


//because html5 history is hard
app.use((req, res, next) => {
  const reqPath = req.url
  const file = _.last(reqPath.split('/'))
  if (['bundle.js', 'index.html'].indexOf(file) !== -1) {
    res.end(devMiddleware.fileSystem.readFileSync(path.join(config.output.path, file)))
  } else if (file.indexOf('.') === -1) {
    res.end(devMiddleware.fileSystem.readFileSync(path.join(config.output.path, 'index.html')))
  } else {
    next()
  }
})


// app.get('*', (req, res) => {
// 	res.redirect('/index.html')
// })


var port = process.env.PORT || 7000
app.listen(port, () => {
	console.log('===================================================================================')
    console.log(`Prism Application Server Online. Port: ${port}. Environment: ${process.env.NODE_ENV}`)
	console.log('===================================================================================')
})


    // "start": "webpack-dev-server --progress --inline --hot",
