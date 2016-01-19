var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'test/e2e/end-to-end-scenario.js'
  ],

  capabilities : {
    'browserName': 'chrome'
    /*browserName : 'chrome',
    'chromeOptions': {
      args: ['-test-type']
    }*/
  },
  //chromeOnly:true,
  directConnect: true,
  baseUrl:"",
  baseUrl: 'http://localhost:3000',

  framework: 'jasmine',
  jasmineNodeOpts:
  {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 30000
  },

  // ...
  onPrepare: function() {
    jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({

          savePath: 'target',
          screenshotsFolder: '\\images',
          showSummary: true
        })
    );
  }
};
