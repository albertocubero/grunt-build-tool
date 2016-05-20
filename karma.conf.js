var path = require('path');
var webpack = require('webpack');
var globalConfig = require('./grunt/config/global.json');
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {

    config.set({

        browsers: ['PhantomJS'],

        frameworks: ['jasmine'],

        files: [{
            pattern: './tests/tests.webpack.js',
            watched: false
        }],

        preprocessors: {
            'tests/tests.webpack.js': ['webpack', 'sourcemap'],
        },

        reporters: ['mocha'],

        webpack: {
            resolve: webpackConfig.resolve,
            module: {
                loaders: webpackConfig.module.loaders
            },
            plugins: webpackConfig.plugins,
            devtool: 'inline-source-map',
            stats: {
                colors: true
            }
        },

        webpackMiddleware: {
            noInfo: true
        },

        coverageReporter: {
            reporters: [{
                type: 'html',
                dir: 'dist/ui-coverage',
                subdir: 'html'
            }, {
                type: 'cobertura',
                dir: 'dist/ui-coverage',
                subdir: 'cobertura'
            }, {
                type: 'text-summary'
            }]
        },

        thresholdReporter: {
            statements: 90,
            branches: 85,
            functions: 90,
            lines: 90
        }

    })

}
