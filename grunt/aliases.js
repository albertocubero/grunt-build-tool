module.exports = {

    'default': ['dev'],

    'lint': [
        'eslint:scripts',
        'scsslint:styles'
    ],

    'styles:dev': [
        'sass:dev',
        'postcss:dev',
        'copy:styles'
    ],

    'styles:prod': [
        'sass:prod',
        'postcss:prod'
    ],

    'dev': [
        'clean:dev',
        'lint',
        'styles:dev',
        'webpack:dev',
        'copy:markup',
        'browserSync',
        'watch'
    ],

    'prod': [
        'clean:prod',
        'lint',
        'styles:prod',
        'webpack:prod',
        'copy:prod'
    ]

};
