
var gulp = require('gulp'),
    webpack = require('webpack'),
    babel = require('gulp-babel'),
    gutil = require('gulp-util'),
    open = require('gulp-open'),
    path = require('path'),
    Server = require('karma').Server,
    webpackConfig = require('./webpack/webpack.config.js'),
    exampleConfig = require('./webpack/example.config.js'),
    WebpackDevServer = require("webpack-dev-server"),
    projectName = require("./package.json").name,
    vueCompiler = require('vueify').compiler
    fs = require('fs'),
    glob = require('glob'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    devPort = 3005;


function resolve(dir) {
    return path.join(process.cwd(), dir)
}

var getEntry = function() {
    var webpackConfigEntry = {};
    var basedir =resolve('src');
    var files = glob.sync(path.join(basedir, '*.vue'));

    files.forEach(function(file) {
        var relativePath = path.relative(basedir, file);
        webpackConfigEntry[relativePath.replace(/\.vue/, '')] = [file];
    });

    return webpackConfigEntry;
};

gulp.task('babel', function () {
    return gulp.src(['src/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('lib'))
});

gulp.task('component',function(done){
    let config = {
        entry: getEntry(),
        output: {
            path: resolve('lib'),
            filename: '[name].js'
        },
        module:webpackConfig.module,
        plugins: webpackConfig.plugins
    };
    webpack(config).run(function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({}));
        done();
    });
})

gulp.task('open', function () {
    gulp.src(__filename)
        .pipe(open({uri: 'http://127.0.0.1:' + devPort + '/examples/index.html'}));
});

gulp.task('example', function (done) {
    var wbpk = Object.create(exampleConfig);
    wbpk.devtool = 'eval';
    wbpk.entry = [
        'webpack-dev-server/client?http://127.0.0.1:' + devPort,
        'webpack/hot/only-dev-server',
        './examples/src/index.js'
    ];
    new WebpackDevServer(webpack(wbpk), {
        publicPath: '/examples/dist/',
        hot: true,
        historyApiFallback: true,
        port: devPort,
        stats: {
            colors: true
        }
    }).listen(devPort, '127.0.0.1', function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://127.0.0.1:" + devPort + "/webpack-dev-server/index.html");
    });
});

gulp.task('webpack', function (done) {
    webpack(webpackConfig).run(function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({}));
        done();
    });
});

gulp.task('exampleWebpack', function (done) {
    webpack(exampleConfig).run(function (err, stats) {
        if (err) throw new gutil.PluginError("exampleWebpack", err);
        gutil.log("[exampleWebpack]", stats.toString({}));
        done();
    });
});

gulp.task('min-webpack', ['webpack'], function (done) {
    var wbpk = Object.create(webpackConfig);
    wbpk.output.filename = projectName+'.min.js';
    wbpk.plugins.push(new webpack.optimize.UglifyJsPlugin());
    webpack(wbpk).run(function (err, stats) {
        if (err) throw new gutil.PluginError("min-webpack", err);
        gutil.log("[min-webpack]", stats.toString({
            // output options
        }));
        done();
    });
});

gulp.task('karma', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('skin', function () {
    gulp.src(['node_modules/phoenix-styles/dist/ios-skin.css']) //多个文件以数组形式传入
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['babel','component', 'min-webpack', 'exampleWebpack','skin']);
gulp.task('demo', ['example', 'open']);
gulp.task('min', ['min-webpack']);
gulp.task('test',['karma']);