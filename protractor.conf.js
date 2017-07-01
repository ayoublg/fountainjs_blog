/**
 * Created by Ayoub on 01/07/2017.
 */
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'src/e2e/**/*.spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
