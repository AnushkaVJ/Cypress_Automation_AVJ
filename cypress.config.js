const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "1qgoh6",
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
  reporter: 'mochawesome',
  trashAssetsBeforeRuns: true,
  videoCompression: false,
  env: {
    'cypress-movie': {
      enabled: true,
      cursorTracking: {
        enabled: false,
        shape: 'arrow',
      },
      width: 1920,
      height: 1080,
    },
  },
  reporterOptions: {
    overwrite: false,
    charts: true,
    reportFilename: '[status]_[datetime]-[name]-report',
  },
  eyesIsDisabled: false,
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 5,
  appliConfFile: {
    batch: {
      id: '51df4ea6-5f48-42ea-9605-0d1b271a01cb',
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 31077,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
