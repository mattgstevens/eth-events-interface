module.exports = {
  automock: false,
  collectCoverageFrom: ['src/**/*.js'],
  rootDir: '../',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.test.js'],
  transform: { '^.*\\.js$': '<rootDir>/config/jest-transform-flow' }
}
