var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    projectName = require("../package.json").name;

function resolve(dir) {
    return path.join(process.cwd(), dir)
}

module.exports = {
    entry: [resolve('src/index.js')],
    devtool:'source-map',
    resolve:{
        alias:{
            "~":path.join(process.cwd(),"node_modules")
        },
        extensions: ['.js', '.vue']
    },
    output: {
        library: 'swan',
        libraryTarget: 'umd',
        path: resolve('dist'),
        filename: projectName+'.js'
    },
    externals:[{
        'vue': {
            root: 'vue',
            commonjs2: 'vue',
            commonjs: 'vue',
            amd: 'vue'
        }
    }],
    module:{
        rules:[{
            test: /\.vue$/,
            use: 'vue-loader'
        },{
            test:/\.js/,
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
    plugins: [
        new ExtractTextPlugin('phoenix-styles.css')
    ]
};