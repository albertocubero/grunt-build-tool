module.exports = {

  dev: {
    devtool: 'source-map',
    entry: ['./assets/scripts/foo.js', './assets/scripts/bar.js'],
    output: {
        path: "./build",
        filename: "bundle.js"
    }
  }

}
