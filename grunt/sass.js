var path = require('path');
var devPath = require('./config/dev.json').path;
var prodPath = require('./config/prod.json').path;
var globalConfig = require('./config/global.json');

module.exports = {

    dev: {
        options: {
            sourceMap: true,
            sourceMapEmbed: true,
            outputStyle: 'expanded'
        },
        files: [{
            src: path.resolve(globalConfig.folder.styles + '/main.scss'),
            dest: path.resolve(devPath + '/main.css')
        }]
    },

    prod: {
        files: [{
            src: path.resolve(globalConfig.folder.styles + '/main.scss'),
            dest: path.resolve(prodPath + '/main.css')
        }]
    }

};
