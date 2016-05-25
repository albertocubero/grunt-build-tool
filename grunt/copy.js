var path = require('path');
var devPath = require('./config/dev.json').path;
var prodPath = require('./config/prod.json').path;
var globalConfig = require('./config/global.json');

module.exports = {

    styles: {
        files: [{
            src: path.resolve(globalConfig.folder.styles + '/**/*.scss'),
            dest: path.resolve(devPath),
            expand: true
        }]
    },

    markup: {
        files: [{
            cwd: path.resolve(globalConfig.folder.markup),
            src: 'index.html',
            dest: path.resolve(devPath),
            expand: true,
            flatten: true
        }]
    },

    prod: {
        files: [{
            cwd: path.resolve(globalConfig.folder.markup),
            src: 'index.html',
            dest: path.resolve(prodPath),
            expand: true,
            flatten: true
        }]
    }

};
