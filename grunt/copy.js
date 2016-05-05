var grunt = require('grunt');
var devPath = grunt.file.readJSON('./grunt/config/dev.json').path;
var globalConfig = grunt.file.readJSON('./grunt/config/global.json');

module.exports = {

    markup: {
        files: [{
            cwd: globalConfig.folder.markup,
            src: 'index.html',
            dest: devPath,
            expand: true,
            flatten: true
        }]
    }

};
