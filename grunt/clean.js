var devPath = require('./config/dev.json').path;
var prodPath = require('./config/prod.json').path;

module.exports = {

    dev: {
        src: devPath
    },

    prod: {
        src: prodPath
    }

};
