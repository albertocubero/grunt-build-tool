module.exports = {

    'default': [],

    'lint': [
        'eslint:source',
        'scsslint:styles'
    ],

    'dev': [
        'clean:dev',
        'lint',
        'sass:dev',
        'webpack:dev'
        ]
        
};
