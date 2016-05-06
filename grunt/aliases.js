module.exports = {

    'default': ['dev'],

    'lint': [
        'eslint:scripts',
        'scsslint:styles'
    ],

    'styles:dev': [
        'sass:dev',
        'postcss:dev'
    ],

    'styles:prod': [
        'sass:prod',
        'postcss:prod'
    ],

    'dev': [
        'clean:temp',
        'clean:dev',
        'lint',
        'styles:dev',
        'webpack:dev',
        'copy:dev',
        'browserSync',
        'watch'
    ],

    'prod': [
        'clean:temp',
        'clean:prod',
        'lint',
        'styles:prod',
        'webpack:prod',
        'copy:prod'
    ]

};
