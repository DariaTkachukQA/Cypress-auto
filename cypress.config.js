const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: `https://guest:welcome2qauto@qauto.forstudy.space`,
    video: true,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }, 
    env: {
      USERNAME: 'guest',
      PASSWORD: 'welcome2qauto',
      userEmail: 'dariaaa.tkachuk+User1@gmail.com',
      userPassword: 'XyIKVMQAju6KOGK',
      linkGarage: 'https://qauto.forstudy.space/panel/garage',
    },
    defaultBrowser: 'chrome'
  },
});

