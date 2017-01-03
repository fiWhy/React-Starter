/**
 * Created by Asus on 05.11.2016.
 */
var config = require('./main');
var webpack = require('webpack');
var webpackPluginHtml = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var loaders = require('./loaders');

module.exports = {
    context: config.src,
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx', '.html', 'scss']
    },
    module: {
        loaders: loaders
    },
    plugins: [
        new webpackPluginHtml({
            template: 'index.html'
        }),
        new ExtractTextPlugin("styles.css")
    ]
};
