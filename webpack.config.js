var webpack             = require('webpack')
var HtmlWebpackPlugin   = require('html-webpack-plugin')

var env = process.env.NODE_ENV

var node_modules    = path.resolve(__dirname, 'node_modules');
var src             = path.resolve(__dirname, 'src');
var dist            = path.resolve(__dirname, 'dist');


var config = {
    entry: {
        app: [
            './src/index.js'
        ]
    },

    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
        ]
    },

    output: {
        path: dist,
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
        
    ]
};

if (env === undefined || env === 'development') {
    config.entry.app.unshift('babel-polyfill')
}

if (env === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true,
                warnings: false
            }
        })
    )
}

module.exports = config