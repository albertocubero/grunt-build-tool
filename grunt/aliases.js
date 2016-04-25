module.exports = {

    'default': [],

    'lint': [
        'eslint:source',
        'scsslint:styles'
    ],

    'styles:dev': [
        'sass:dev',
        'postcss:dev'
    ],

    'dev': [
        'clean:dev',
        'lint',
        'styles:dev',
        'webpack:dev'
        ]

};
