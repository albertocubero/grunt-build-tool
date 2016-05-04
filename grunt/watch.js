module.exports = {

    markup: {
        files: ['./assets/markup/**/*.html'],
        tasks: ['copy:markup']
    },

    scripts: {
        files: ['./assets/scripts/**/*.js'],
        tasks: ['eslint:scripts', 'webpack:dev']
    },

    styles: {
        files: ['./assets/styles/**/*.scss'],
        tasks: ['scsslint:styles', 'styles:dev']
    }

};
