var HtmlWebpackPlugin   = require('html-webpack-plugin')
var path                = require('path')
var webpack             = require('webpack')

// var env     = process.env.NODE_ENV
var port    = process.env.PORT || 7000

var node_modules    = path.resolve(__dirname, 'node_modules')
var src             = path.resolve(__dirname, 'src')
var dist            = path.resolve(__dirname, 'dist')

var publicPath      = '/'


var config = {
    devServer: {
        historyApiFallback: { index: publicPath },      //must match publicPath for HTML5 history to work 
                                                        //https://webpack.github.io/docs/webpack-dev-server.html#the-historyapifallback-option
        // hot: true,
        // noInfo: true,
        port: port,
        progress: true,
        stats: { colors: true },
        watch: true
    },


    entry: {
        app: [
            'babel-polyfill',
            'webpack-dev-server/client?http://127.0.0.1:' + port,
            'webpack/hot/only-dev-server',
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
                test: /\.less$/,
                loader: "style!css!less"
            },
            { 
                test: /\.css$/, 
                loaders: [ 'style', 'css' ] },
            { 
                test: /\.(png|ico|svg)$/, 
                loader: 'file-loader?name=[name].[ext]',
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
    
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify(env)
        // }),

        // new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
        
    ]
}


module.exports = config