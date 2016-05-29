var HtmlWebpackPlugin   = require('html-webpack-plugin')
var path                = require('path')
var webpack             = require('webpack')

var port    = process.env.PORT || 7000

var node_modules    = path.resolve(__dirname, 'node_modules')
var src             = path.resolve(__dirname, 'src')
var dist            = path.resolve(__dirname, 'dist')

var publicPath      = '/'
    

var config = {

    entry: {
        app: [
            'babel-polyfill',
            'webpack-dev-server/client?http://127.0.0.1:' + port,
            'webpack/hot/only-dev-server',
            './src/index.js'
        ]
    },

    devServer: {
        historyApiFallback: { index: publicPath },      //must match publicPath for HTML5 history to work 
                                                        //https://webpack.github.io/docs/webpack-dev-server.html#the-historyapifallback-option
        port: port,
        stats: { colors: true, chunks: false },
        watch: true
    },

    // devtool: 'eval',  //i don't know what this does

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
                test: /\.(png|ico|svg|gif)$/, 
                loader: 'file-loader?name=[name].[ext]',
                exclude: node_modules,
                include: src
            },
            { 
                test: /\.(woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000'
            }
        ]
    },

    output: {
        path: dist,
        publicPath: publicPath,
        filename: 'bundle.js'
    },

    plugins: [
    
        new webpack.DefinePlugin({                           //unnecessary???
            // 'process.env.NODE_ENV': JSON.stringify(env)
            'TEST123': './routes'
        }),

        // new webpack.HotModuleReplacementPlugin(),  //don't use this with --hot

        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
        
    ]

}


module.exports = config