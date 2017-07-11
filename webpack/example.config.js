var webpack = require('webpack'),
    path = require('path'),
    extend = require('extend'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
    return path.join(process.cwd(), dir)
}

module.exports = extend({},{
    entry: resolve('examples/src/index.js'),
    output: {
        libraryTarget: 'umd',
        path: resolve('examples/dist'),
        filename: 'examples.js'
    },
    resolve: {
        alias: { "swan-ui" : resolve('src') },
        modules: [
            'node_modules'
        ],
        extensions: ['.js','.vue']
    },
    module: {
        rules:[{
            enforce: 'pre',
            test: /\.vue$/,
            loader: 'eslint-loader',
            include: [resolve('src'), resolve('test')],
        },{
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /node_modules/
        },{
            test:/\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract('css-loader')
        },{
            test:/\.less$/,
            use:  ExtractTextPlugin.extract('style-loader", "css-loader!less-loader')
        },{
            test:/\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: 'file-loader?name=../dist/iconfont/[name].[ext]'
        }]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('example.css')
    ]
});