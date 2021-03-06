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
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
                exclude: node_modules,
                include: src
            },
            {
                test: /\.(png|ico|svg|gif)$/,
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
    },

    plugins: [

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.PRISMAPI_URL': JSON.stringify(process.env.PRISMAPI_URL),
            'process.env.MEETUP_OAUTH2_AUTH_URL': JSON.stringify(process.env.MEETUP_OAUTH2_AUTH_URL)
        })

    ]


}


module.exports = config