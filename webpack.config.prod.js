import HtmlWebpackPlugin   from 'html-webpack-plugin'
import path                from 'path'
import webpack             from 'webpack'

var node_modules    = path.resolve(__dirname, 'node_modules')
var dist            = path.resolve(__dirname, 'dist')
var src             = path.resolve(__dirname, 'src')

export default {

    devtool: 'eval-source-map',         //probably should be hook up to env per developer's taste

    entry: {
        app: [
            'babel-polyfill',
            'webpack-hot-middleware/client',
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
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [

        new webpack.DefinePlugin({
          'process.env': {
            'PRISMAPI_URL': JSON.stringify(process.env.PRISMAPI_URL || 'http://localhost:9000/graphql')
          }
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),                           //to see node errors on front end


        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })

    ]

}


