var grunt = require('grunt');
var devPath = grunt.file.readJSON('./grunt/config/dev.json').path;

module.exports = {

    init: {
        src: ['scss-lint-report.xml']
    },

	dev: {
	    src: devPath
	}

};
