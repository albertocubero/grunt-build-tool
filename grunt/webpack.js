var grunt = require('grunt');
var devPath = grunt.file.readJSON('./grunt/config/dev.json').path;
var prodPath = grunt.file.readJSON('./grunt/config/prod.json').path;

module.exports = {

    options: require('../webpack.config.js'),

    dev: {
        devtool: 'source-map',
        output: {
            path: devPath,
            filename: "bundle.js"
        }
    },

    prod: {
        output: {
            path: prodPath,
            filename: "bundle.js"
        }
    }

}
