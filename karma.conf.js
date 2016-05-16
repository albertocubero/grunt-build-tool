var globalConfig = require('./grunt/config/global.json');

module.exports = function(config) {

  config.set({

      frameworks: ['jasmine'],

      files: [
            {
                pattern: './tests/tests.webpack.js', watched: false
            }
      ],

      preprocessors: {
        'tests/tests.webpack.js': ['webpack', 'sourcemap']
     },

      reporters: ['mocha'],

      webpack: {
            stats: {
                colors: true
            },
            devtool: 'inline-source-map'
      },

      webpackMiddleware: {
			noInfo: true
	}

  })

}
