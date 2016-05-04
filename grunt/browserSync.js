module.exports = {

    dev: {
        bsFiles: {
            src: ['./build/index.html', './build/bundle.js', './build/main.css']
        },
        options: {
            watchTask: true,
            server: {
                baseDir: "./build/",
                index: "index.html"
            }
        }
    }

};
