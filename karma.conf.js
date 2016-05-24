var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var globalConfig = require('./grunt/config/global.json');
var devPath = require('./grunt/config/dev.json').path;

module.exports = function(config) {

    config.set({

        browsers: ['PhantomJS'],

        frameworks: ['jasmine'],

        files: [{
            pattern: './' + globalConfig.folder.tests + '/tests.webpack.js',
            watched: false
        }],

        preprocessors: function () {
            var p = {};
            p[globalConfig.folder.tests + '/tests.webpack.js'] = ['webpack', 'sourcemap'];
            return p;
        }(),

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
                dir: devPath + '/ui-coverage',
                subdir: 'html'
            }, {
                type: 'cobertura',
                dir: devPath + '/ui-coverage',
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
