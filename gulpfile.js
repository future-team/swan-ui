var gulp = require('gulp'),
    webpack = require('webpack'),
    babel = require('gulp-babel'),
    gutil = require('gulp-util'),
    open = require('gulp-open'),
    path = require('path'),
    Server = require('karma').Server,
    markdown = require('gulp-markdown')
    componentConfig = require('./webpack/component.config.js'),
    exampleConfig = require('./webpack/example.config.js'),
    webpackConfig = require('./webpack/webpack.config.js'),
    WebpackDevServer = require("webpack-dev-server"),
    projectName = require("./package.json").name,
    fs = require('fs'),
    devPort = 3005;

gulp.task('babel', function () {
    return gulp.src(['src/?(mixins|utils)/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('lib'))
});

gulp.task('open', function () {
    gulp.src(__filename)
        .pipe(open({uri: 'http://127.0.0.1:' + devPort + '/examples/index.html'}));
});

gulp.task('example', function (done) {
    var wbpk = Object.create(exampleConfig);
    wbpk.devtool = 'source-map';
    wbpk.entry = [
        'webpack-dev-server/client?http://127.0.0.1:' + devPort,
        'webpack/hot/only-dev-server',
        './examples/src/index.js'
    ];
    wbpk.plugins.push(new webpack.HotModuleReplacementPlugin());
    wbpk.plugins.push(new webpack.NoEmitOnErrorsPlugin());

    var compiler = webpack(wbpk);
    new WebpackDevServer(compiler, {
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

gulp.task('example-webpack', function (done) {
    webpack(exampleConfig).run(function (err, stats) {
        if (err) throw new gutil.PluginError("exampleWebpack", err);
        gutil.log("[example-webpack]", stats.toString({}));
        done();
    });
});

gulp.task('component-webpack', function (done) {
    webpack(componentConfig).run(function (err, stats) {
        if (err) throw new gutil.PluginError("exampleWebpack", err);
        gutil.log("[example-webpack]", stats.toString({}));
        done();
    });
});

gulp.task('karma', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('default', ['babel','component-webpack','min-webpack', 'example-webpack']);
gulp.task('demo', ['example', 'open']);
gulp.task('test',['karma']);
