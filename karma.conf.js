var webpackConfig = require('./webpack/test.config.js')

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        // 这是所有测试的入口文件。
        files: ['test/index.js'],
        // 把入口文件传给 webpack 以进行打包。
        preprocessors: {
            'test/index.js': ['webpack']
        },
        reporters: ['progress', 'coverage'],
        // 使用 webpack 配置
        webpack: webpackConfig,
        // avoid walls of useless text
        webpackMiddleware: {
            noInfo: true
        },
        coverageReporter: {
            type: 'html',
            dir: 'test/coverage'
        }
    })
}