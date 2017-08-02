var webpack = require('webpack'),
    extend = require('extend'),
    path = require('path');

module.exports =extend({},{
    devtool:'inline-source-map',
    output:{
        pathinfo:true
    },
    resolve: {
        alias:{
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module:{
        rules:[{
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /node_modules/,
            options: {
                loaders: {
                    'js': 'isparta-loader'
                }
            }
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
    }

});