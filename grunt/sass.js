var grunt = require('grunt');
var devPath = grunt.file.readJSON('./grunt/config/dev.json').path;
var globalConfig = grunt.file.readJSON('./grunt/config/global.json');

// TODO: usar 'grunt.file.expand' para obetener el main (meterlo en utils parametrizado)
function getFiles (path) {
    var dest = path + '/main.css';
    var src = globalConfig.folder.styles + '/main.scss';
    var obj = {};
    obj[dest] = src;
    return obj;
}

module.exports = {

    dev: {
        options: {
            sourceMap: true,
            sourceMapEmbed: true,
            outputStyle: 'expanded'
        },
        files: getFiles(devPath)
    }

};
