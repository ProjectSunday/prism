var HtmlWebpackPlugin   = require('html-webpack-plugin')
var path                = require('path')
var webpack             = require('webpack')

var env = process.env.NODE_ENV
var port = process.env.PORT

var node_modules    = path.resolve(__dirname, 'node_modules')
var src             = path.resolve(__dirname, 'src')
var dist            = path.resolve(__dirname, 'dist')

var publicPath      = '/'


var config = {
    entry: {
        app: [
            './src/index.js'
        ]
    },

    module: {
        loaders: [
            { 
                test: /\.js$/, 
                loader: "babel-loader",
                exclude: node_modules,
                include: src,
                query: {
                    plugins: [ 'transform-runtime', 'transform-decorators-legacy' ],
                    presets: [ 'es2015', 'stage-0', 'react' ]
                }
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            { 
                test: /\.css$/, 
                loaders: [ 'style', 'css' ] },
            { 
                test: /\.(png|ico|svg)$/, 
                loader: 'file?name=[name].[ext]',
                exclude: node_modules,
                include: src
            },
            { 
                test: /\.(woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000',
                exclude: src
            }
        ]

        
    },

    output: {
        path: dist,
        publicPath: publicPath,
        filename: 'bundle.js'
    },

    plugins: [
    
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
    config.devServer = {
        historyApiFallback: { index: publicPath },      //must match publicPath for HTML5 history to work 
                                                        //https://webpack.github.io/docs/webpack-dev-server.html#the-historyapifallback-option
        noInfo: true,
        port: port || 7000,
        progress: true,
        stats: { colors: true },
        watch: true
    }
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