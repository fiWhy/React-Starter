var webpackConfig = require('./webpack');
var loaders = require('./loaders');
var merge = require('webpack-merge');

module.exports = merge(webpackConfig, {
    devtool: 'inline-source-map',
    module: {
        loaders: loaders,
        postLoaders: [
            {
                test: /\.ts$/,
                exclude: [
                    /test\.ts$/,
                    'node_modules',
                    /\.spec\.ts$/
                ],
                loader: 'istanbul-instrumenter'
            }
        ]
    }
});