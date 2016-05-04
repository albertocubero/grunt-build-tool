module.exports = {

  dev: {
    devtool: 'source-map',
    entry: "./assets/scrips/foo.js",
    output: {
        path: "./build",
        filename: "bundle.js"
    }
  }

}
