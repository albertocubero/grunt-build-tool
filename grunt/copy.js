var grunt = require('grunt');
var devPath = grunt.file.readJSON('./grunt/config/dev.json').path;
var prodPath = grunt.file.readJSON('./grunt/config/prod.json').path;
var globalConfig = grunt.file.readJSON('./grunt/config/global.json');

module.exports = {

    styles: {
        files: [{
            src: globalConfig.folder.styles + '/**/*.scss',
            dest: devPath,
            expand: true
        }]
    },

    markup: {
        files: [{
            cwd: globalConfig.folder.markup,
            src: 'index.html',
            dest: devPath,
            expand: true,
            flatten: true
        }]
    },

    prod: {
        files: [{
            cwd: globalConfig.folder.markup,
            src: 'index.html',
            dest: prodPath,
            expand: true,
            flatten: true
        }]
    }

};
