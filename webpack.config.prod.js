var path                = require('path')
var webpack             = require('webpack')

var port            = process.env.PORT

var node_modules    = path.resolve(__dirname, 'node_modules')
var src             = path.resolve(__dirname, 'src')
var dist            = path.resolve(__dirname, 'dist')

var publicPath      = '/'


var config = {
    devtool: 'source-map',

    entry: {
        app: [
            'babel-polyfill',
            './src/index.js'
        ]
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'react-hot', 'babel-loader' ],
                exclude: node_modules,
                include: src
            },

            {
                test: /\.(scss|sass)$/,
                loaders: [ 'style', 'css', 'sass' ]
            },

            {
                test: /\.css$/,
                loaders: [ 'style', 'css' ]
            },

            {
                test: /\.(png|ico|svg|gif|html)$/,
                loader: 'file-loader?name=[name].[ext]',
                exclude: node_modules,
                include: src
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader'
            }
        ]
    },

    output: {
        path: dist,
        publicPath: publicPath,
        filename: 'bundle.js'
    }

}


module.exports = config