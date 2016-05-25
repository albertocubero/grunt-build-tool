var path = require('path');
var devPath = require('./config/dev.json').path;

module.exports = {

    dev: {
        bsFiles: {
            src: [path.resolve(devPath + '/index.html'), path.resolve(devPath + '/bundle.js'), path.resolve(devPath + '/main.css')]
        },
        options: {
            watchTask: true,
            server: {
                baseDir: path.resolve(devPath),
                index: "index.html"
            }
        }
    }

};
