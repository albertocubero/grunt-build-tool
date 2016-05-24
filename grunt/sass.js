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
