var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    { test: /\.(ts|tsx)$/, loaders: ['awesome-typescript-loader'] },
    { test: /\.html$/, loaders: ['html-loader'] },
    { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass-loader') },
    { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=assets/[name].[hash].[ext]' },
]