var grunt = require('grunt');
var devPath = grunt.file.readJSON('./grunt/config/dev.json').path;
var prodPath = grunt.file.readJSON('./grunt/config/prod.json').path;
var globalConfig = grunt.file.readJSON('./grunt/config/global.json');

module.exports = {

    dev: {
        options: {
            sourceMap: true,
            sourceMapEmbed: true,
            outputStyle: 'expanded'
        },
        files: [
            {src: globalConfig.folder.styles + '/main.scss', dest: devPath + '/main.css'}
        ]
    },

    prod: {
        files: [
            {src: globalConfig.folder.styles + '/main.scss', dest: prodPath + '/main.css'}
        ]
    }

};
