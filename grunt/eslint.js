var path = require('path');
var globalConfig = require('./config/global.json');

module.exports = {

    scripts: {
        src: [path.resolve(globalConfig.folder.scripts + '/**/*.js')]
    }

};
