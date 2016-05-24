var devPath = require('./config/dev.json').path;
var prodPath = require('./config/prod.json').path;

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
