var globalConfig = require('./config/global.json');

module.exports = {

	scripts: {
		src: [globalConfig.folder.scripts + '/**/*.js']
	}

};
