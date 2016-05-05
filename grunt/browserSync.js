var grunt = require('grunt');
var devPath = grunt.file.readJSON('./grunt/config/dev.json').path;

module.exports = {

    dev: {
        bsFiles: {
            src: [devPath + '/index.html', devPath + '/bundle.js', devPath + '/main.css']
        },
        options: {
            watchTask: true,
            server: {
                baseDir: devPath,
                index: "index.html"
            }
        }
    }

};
