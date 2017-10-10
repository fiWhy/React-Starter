var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require('./main');

module.exports = [
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor"
    }),
    new HtmlWebpackPlugin({
        template: config.html
    }),
    new ExtractTextPlugin("styles.css")
];