var path = require('path');
var webpack = require('webpack');
var devPath = require('./config/dev.json').path;
var prodPath = require('./config/prod.json').path;

module.exports = {

    options: require('../webpack.config.js'),

    dev: {
        devtool: 'source-map',
        output: {
            path: path.resolve(devPath)
        }
    },

    prod: {
        devtool: 'cheap-module-source-map',
        output: {
            path: path.resolve(prodPath)
        },
        plugins: [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                comments: false,
                sourceMap: false,
                mangle: true,
                minimize: true
            })
        ]
    }

}
