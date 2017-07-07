var webpack = require('webpack'),
    path = require('path'),
    extend = require('extend'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
    return path.join(process.cwd(), dir)
}

var cssOption = {
    use: 'css-loader',
    fallback: 'vue-style-loader'
};
var lessOption = {
    use: [
        'css-loader',
        'less-loader'
    ],
    fallback: 'vue-style-loader'
};

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
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /node_modules/,
            options: {
                loaders: {
                    // 'css': ExtractTextPlugin.extract(cssOption),
                    // 'less': ExtractTextPlugin.extract(lessOption)
                }
            }
        },{
            test:/\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract(cssOption)
        },{
            test:/\.less$/,
            use: ExtractTextPlugin.extract(lessOption)
        },{
            test:/\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: 'file-loader?name=./dist/iconfont/[name].[ext]'
        }]
    },
    plugins:[
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('example.css')
    ]
});