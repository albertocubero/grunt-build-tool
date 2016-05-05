var grunt = require('grunt');
var globalConfig = grunt.file.readJSON('./grunt/config/global.json');

module.exports = {

    markup: {
        files: [globalConfig.folder.markup + '/**/*.html'],
        tasks: ['copy:markup']
    },

    scripts: {
        files: [globalConfig.folder.scripts + '/**/*.js'],
        tasks: ['eslint:scripts', 'webpack:dev']
    },

    styles: {
        files: [globalConfig.folder.styles + '/**/*.scss'],
        tasks: ['scsslint:styles', 'styles:dev']
    }

};
