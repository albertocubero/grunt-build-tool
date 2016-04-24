module.exports = {

    'dev': {
        options: {
            browserifyOptions: {
                debug: true
            }
        },
        files: {
            'build/bundle.js': 'assets/js/**/*.js'
        }
    }

};
