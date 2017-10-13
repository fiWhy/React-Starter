/**
 * Created by Asus on 05.11.2016.
 */
var webpack = require('webpack');
var mainConfig = require('../config/main');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../config/webpack.dev');

function run() {
    var compiler = webpack(webpackConfig);
    return new webpackDevServer(compiler, {
        publicPath: "",
    }).listen(mainConfig.devPort)
}

run();