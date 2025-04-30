const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5bqxc6',
  e2e: {
    baseUrl: 'http://127.0.0.1:5500/52-Testing-Cypress',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
