const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
  env : {
    hideCredentials: true,
    requestMode: true, // feedback visual do comando cy.request,
    snapshotOnly: true
  },
  experimentalRunAllSpecs: true //roda todos os testes de uma vez na interface gráfica
},
  fixturesFolder: false,
  video: false,
})
