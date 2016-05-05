var grunt = require('grunt');
var globalConfig = grunt.file.readJSON('./grunt/config/global.json');

module.exports = {

	scripts: {
		src: [globalConfig.folder.scripts + '/**/*.js']
	}

};
