var grunt = require('grunt');
var devPath = grunt.file.readJSON('./grunt/config/dev.json').path;
var prodPath = grunt.file.readJSON('./grunt/config/prod.json').path;
var globalConfig = grunt.file.readJSON('./grunt/config/global.json');

function getScriptsFiles () {
    return grunt.file.expand({filter: "isFile"}, ['./'+globalConfig.folder.scripts+"/**/*.js"]);
}

module.exports = {

    dev: {
        devtool: 'source-map',
        entry: getScriptsFiles(),
        output: {
            path: devPath,
            filename: "bundle.js"
        }
    },

    prod: {
        entry: getScriptsFiles(),
        output: {
            path: prodPath,
            filename: "bundle.js"
        }
    }

}
