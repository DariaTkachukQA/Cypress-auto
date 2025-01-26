const { defineConfig } = require("cypress");
module.exports = defineConfig({
    e2e: {
      baseUrl: `https://guest:welcome2qauto@qauto2.forstudy.space`,
      video: true,
      screenshotOnRunFailure: false,
      chromeWebSecurity: false,
      env: {
        USERNAME: 'guest',
        PASSWORD: 'welcome2qauto',
        userEmail:'dariaaa.tkachuk+User2@gmail.com',
        userPassword: 'Testauto123',
        linkGarage:'https://qauto2.forstudy.space/panel/garage',
      },
      defaultBrowser: 'chrome'
    },
  
  });
  //dariaaa.tkachuk+User2@gmail.com Testauto123