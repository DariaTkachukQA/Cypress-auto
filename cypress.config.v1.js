const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: `https://guest:welcome2qauto@qauto.forstudy.space`,
    video: true,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,

    env: {
      USERNAME: 'guest',
      PASSWORD: 'welcome2qauto',
      userEmail:'dariaaa.tkachuk+User1@gmail.com',
      userPassword: 'fiTmiPQv6gBtdF1',
      linkGarage: 'https://qauto.forstudy.space/panel/garage',
    },
    defaultBrowser: 'chrome'
  },

});