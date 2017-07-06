var webpack = require('webpack'),
    path = require('path'),
    extend = require('extend'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
    return path.join(process.cwd(), dir)
}

module.exports = extend({},{
    entry: [resolve('examples/src/index.js')],
    output: {
        libraryTarget: 'umd',
        path: resolve('examples/dist'),
        filename: 'examples.js'
    },
    resolve: {
        alias: { "swan-ui" : "../../src/index.js" },
        modules: [
            'node_modules',
            'lib'
        ],
        extensions: ['.js','.vue']
    },
    module: {
        rules:[{
            test: /\.vue$/,
            use: 'vue-loader'
        },{
            test:/\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        },{
            test:/\.less$/,
            use: ExtractTextPlugin.extract({
                use: 'less-loader'
            })
        },{
            test:/\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: 'file-loader?name=./iconfont/[name].[ext]'
        }]
    },
    plugins:[
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('phoenix-styles.css')
    ]
});