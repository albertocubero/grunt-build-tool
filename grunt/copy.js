var devPath = require('./config/dev.json').path;
var prodPath = require('./config/prod.json').path;
var globalConfig = require('./config/global.json');

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
