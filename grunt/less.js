module.exports = {

  dev: {
    options: {
      paths: ['assets/styles'],
      sourceMap: true
    },
    files: {
    	'dist/main.css' : 'assets/styles/main.less'
    }
  },

  prod: {
    options: {
      paths: ['assets/styles'],
      plugins: [
        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
        new (require('less-plugin-clean-css'))()
      ]
    },
    files: {
    	'dist/main.css' : 'assets/styles/main.less'
    }
  }

};