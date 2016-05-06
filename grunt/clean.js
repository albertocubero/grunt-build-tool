var grunt = require('grunt');
var devPath = grunt.file.readJSON('./grunt/config/dev.json').path;
var prodPath = grunt.file.readJSON('./grunt/config/prod.json').path;

module.exports = {

    temp: {
        src: ['scss-lint-report.xml']
    },

	dev: {
	    src: devPath
	},

    prod: {
	    src: prodPath
	}

};
