var path = require('path');
var globalConfig = require('./config/global.json');

module.exports = {

    markup: {
        files: [path.resolve(globalConfig.folder.markup + '/**/*.html')],
        tasks: ['copy:markup']
    },

    scripts: {
        files: [path.resolve(globalConfig.folder.scripts + '/**/*.js')],
        tasks: ['eslint:scripts', 'webpack:dev']
    },

    styles: {
        files: [path.resolve(globalConfig.folder.styles + '/**/*.scss')],
        tasks: ['scsslint:styles', 'styles:dev']
    }

};
