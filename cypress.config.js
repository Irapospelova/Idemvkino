const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "mke5bi",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru/admin",
    secondaryUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
