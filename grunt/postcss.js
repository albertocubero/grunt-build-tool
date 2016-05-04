module.exports = {

    dev: {
        options: {
          map: {
              inline: false
          },
          processors: [
            require('autoprefixer')({browsers: 'last 2 versions'}),
          ]
      },
      src: 'build/*.css'
    },

    prod: {
        options: {
          processors: [
            require('pixrem')(),
            require('autoprefixer')({browsers: 'last 2 versions'}),
            require('cssnano')()
          ]
      },
      src: 'build/*.css'
    }

};
