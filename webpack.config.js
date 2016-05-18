var path = require('path');
var webpack = require('webpack');

var globalConfig = require('./grunt/config/global.json');

module.exports = {
    resolve: {
        alias: {
            scripts: __dirname + '/assets/scripts'
        },
        extensions: ['', '.js'],
        fallback: path.resolve('node_modules')
    },
    entry: './' + globalConfig.folder.scripts + '/init.js',
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: require.resolve("jquery"), loader: "expose?$!expose?jQuery" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}
