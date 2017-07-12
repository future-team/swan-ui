var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    projectName = require("../package.json").name;

function resolve(dir) {
    return path.join(process.cwd(), dir)
}

module.exports = {
    entry: [resolve('src/index.js')],
    output: {
        library: 'swan',
        libraryTarget: 'umd',
        path: resolve('dist'),
        filename: projectName +'.js'
    },
    devtool:'source-map',
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
            exclude: /node_modules/,
            options: {
                loaders: {
                    'css': ExtractTextPlugin.extract({
                        use: 'css-loader',
                        fallback: 'vue-style-loader'
                    }),
                    'less': ExtractTextPlugin.extract({
                        use: [
                            'css-loader',
                            'less-loader'
                        ],
                        fallback: 'vue-style-loader'
                    }),
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            }
        },{
            test:/\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract('css-loader')
        },{
            test:/\.less$/,
            use: ExtractTextPlugin.extract('style-loader", "css-loader!less-loader')
        },{
            test:/\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: 'file-loader?name=./iconfont/[name].[ext]'
        }]
    },
    plugins: [
        new ExtractTextPlugin('swan-ui.css')
    ]
};