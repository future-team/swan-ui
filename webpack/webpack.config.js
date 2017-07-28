var webpack = require('webpack'),
    path = require('path'),
    projectName = require("../package.json").name;

function resolve(dir) {
    return path.join(process.cwd(), dir)
}

module.exports = {
    entry: resolve('src/index.js'),
    output: {
        library: 'swan',
        libraryTarget: 'umd',
        path: resolve('dist'),
        filename: projectName+'.js'
    },
    devtool:'eval',
    resolve:{
        modules: [ 'node_modules'],
        extensions: ['.js', '.vue']
    },
    externals:[{
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    }],
    module:{
        rules:[{
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /node_modules/
        },{
            test:/\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: 'css-loader'
        },{
            test:/\.less$/,
            use: 'less-loader'
        },{
            test:/\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: 'file-loader?name=./iconfont/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};