var devPath = require('./config/dev.json').path;

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
