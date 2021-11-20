module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  rootDir: 'build',
  globalSetup: '<rootDir>/test/globalSetup.js',
  globalTeardown: '<rootDir>/test/globalTeardown.js',
  setupFiles: ['<rootDir>/test/setup.js'],
  setupFilesAfterEnv: ['<rootDir>/test/setupAfterEnv.js'],
  verbose: true,
}
