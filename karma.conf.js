const jquery = require('jquery');
module.exports = function(config) {
  const testWebpackConfig = require('./webpack.test.js')({env: 'test'});

  const configuration = {
    basePath: '',

    frameworks: ['jasmine'],

    exclude: [ ],

    files: [ 
      { pattern: './spec-bundle.js', watched: false },
      { pattern: '../src/vendor.browser.js' ,watched: false}
      ],
    preprocessors: { './spec-bundle.js': ['coverage', 'webpack', 'sourcemap'] },

    webpack: testWebpackConfig,

    coverageReporter: {
      type: 'in-memory'
    },
    remapCoverageReporter: {
      'text-summary': null,
      json: './coverage/coverage.json',
      html: './coverage/html'
    },
    reporters: [ 'mocha', 'coverage', 'remap-coverage'],
    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,
     browsers: [
      'Chrome'
    ],
    singleRun: true
  };
  config.set(configuration);
};