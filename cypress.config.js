const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://buger-eats-qa.vercel.app/",
    viewportWidth: 1440,
    viewportHeight: 900,
  },
});
