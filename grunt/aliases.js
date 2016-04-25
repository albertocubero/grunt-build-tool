module.exports = {

    'default': [],

    'lint': [
        'eslint:source'
    ],

    'dev': [
        'clean:dev',
        'lint',
        'sass:dev',
        'webpack:dev'
        ]

};
