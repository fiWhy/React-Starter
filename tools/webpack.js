/**
 * Created by Asus on 05.11.2016.
 */
var ENV = process.env.NODE_ENV || 'development';
var wepback = require('webpack');
var configPath = ENV == 'development'? 'webpack.dev': 'webpack.prod';
var webpackConfig = require('../config/' + configPath + '.js');

function run() {
    return wepback(webpackConfig, function(data) {

    })
}

run();