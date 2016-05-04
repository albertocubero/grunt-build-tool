module.exports = {

    'default': [],

    'lint': [
        'eslint:scripts',
        'scsslint:styles'
    ],

    'styles:dev': [
        'sass:dev',
        'postcss:dev'
    ],

    'dev': [
        'clean:init',
        'clean:dev',
        'lint',
        'styles:dev',
        'webpack:dev',
        'copy:markup',
        'browserSync',
        'watch'
        ]

};
