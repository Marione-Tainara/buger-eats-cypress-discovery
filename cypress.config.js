const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "f2jtn4",
    baseUrl: "https://buger-eats-qa.vercel.app/",
    viewportWidth: 1440,
    viewportHeight: 900,
  },
});
