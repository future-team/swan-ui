var webpack = require('webpack'),
    extend = require('extend');

module.exports =extend({},{
    devtoll:'inline-source-map',
    output:{
        pathinfo:true
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loaders: ['babel?cacheDirectory'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.json$/,
                loader: 'json',
            }
        ]
    }
});