const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',   // pasta onde salva
    overwrite: true,                // sobrescreve relatório antigo
    html: true,                     // gera HTML
    json: false,                    // não precisa gerar JSON separado
    charts: true,
    reportPageTitle: 'Relatório de Testes - QA Rafaela',
    embeddedScreenshots: true,
    inlineAssets: true
  },
  e2e: {
    baseUrl: 'https://devfinance-agilizei.netlify.app',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
