module.exports = {

    'default': [],

    'lint': [
        'eslint:source'
    ],

    'dev': [
        'clean:dev',
        'lint',
        'less:dev',
        'concat:js'
        ]

};