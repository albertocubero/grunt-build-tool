var path = require('path');
var webpackConfig = require('../webpack.config.js');
var globalConfig = require('./config/global.json');

module.exports = {

    options: {
        configFile: 'karma.conf.js'
    },

    unit: {
        browsers: ['PhantomJS']
    },

    'unit-single': {
        singleRun: true
    },

    browser: {
        browsers: ['Chrome']
    },

    coverage: {
        configFile: 'karma.conf.js',
        reporters: ['mocha', 'coverage', 'threshold'],
        singleRun: true,
        webpack: {
            resolve: webpackConfig.resolve,
            plugins: webpackConfig.plugins,
            module: {
                preLoaders: [{
                    test: /\.js$/,
                    include: path.resolve(globalConfig.folder.scripts),
                    loader: 'istanbul-instrumenter'
                }],
                loaders: webpackConfig.module.loaders,
            }
        }
    }

}
