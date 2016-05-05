var grunt = require('grunt');
var devPath = grunt.file.readJSON('./grunt/config/dev.json').path;
var globalConfig = grunt.file.readJSON('./grunt/config/global.json');

function getScriptsFiles () {
    return grunt.file.expand({filter: "isFile", cwd: globalConfig.folder.scripts, matchBase: '**/*.js'}, ["*"]).map(function (file) {
        return './' + globalConfig.folder.scripts + '/' + file;
    });
}

module.exports = {

    dev: {
        devtool: 'source-map',
        entry: getScriptsFiles(),
        output: {
            path: devPath,
            filename: "bundle.js"
        }
    }

}
