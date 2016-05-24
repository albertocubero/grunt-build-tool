var devPath = require('./config/dev.json').path;
var prodPath = require('./config/prod.json').path;

module.exports = {

    options: require('../webpack.config.js'),

    dev: {
        devtool: 'source-map',
        output: {
            path: devPath
        }
    },

    prod: {
        output: {
            path: prodPath
        }
    }

}
