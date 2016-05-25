var path = require('path');
var globalConfig = require('./config/global.json');

module.exports = {

    options: {
        config: '.scss-lint.yml',
        reporterOutput: 'scss-lint-report.xml',
        colorizeOutput: true
    },
    styles: [
        path.resolve(globalConfig.folder.styles + '/**/*.scss')
    ]

}
