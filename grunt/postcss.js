module.exports = {

    dev: {
        options: {
          map: {
              inline: false
          },
          processors: [
            require('autoprefixer')({browsers: ['last 3 versions', 'ie 8', 'ie 9']}),
          ]
      },
      src: 'build/*.css'
    },

    prod: {
        options: {
          processors: [
            require('pixrem')(),
            require('autoprefixer')({browsers: ['last 3 versions', 'ie 8', 'ie 9']}),
            require('cssnano')()
          ]
      },
      src: 'build/*.css'
    }

};
