module.exports = {

    options: {
      config: '.scss-lint.yml',
      reporterOutput: 'scss-lint-report.xml',
      colorizeOutput: true
    },
    styles: [
      'test/fixtures/*.scss',
    ]

}
