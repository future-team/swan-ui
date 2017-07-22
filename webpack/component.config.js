var webpack = require('webpack'),
    path = require('path'),
    glob = require('glob');

function resolve(dir) {
    return path.join(process.cwd(), dir)
}

var getEntry = function() {
    var webpackConfigEntry = {};
    var basedir =resolve('src/modules');
    var files = glob.sync(path.join(basedir, '**/*.vue'));

    files.forEach(function(file) {
        var relativePath = path.relative(basedir, file).replace(/\.vue/, '');
        var relativePaths = relativePath.split('/')
        var fileName = relativePaths.length > 1 ? relativePaths[relativePaths.length-1] : relativePaths[0]
        webpackConfigEntry[fileName] = [file];
    });
    webpackConfigEntry['index'] = resolve('src/index.js')
    return webpackConfigEntry;
};

module.exports = {
    entry: getEntry(),
    output: {
        library: 'swan',
        libraryTarget: 'umd',
        path: resolve('lib'),
        filename: '[name].js'
    },
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