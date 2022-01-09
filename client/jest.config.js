module.exports = {
  bail: 1,
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: { '^.+\\.js$': 'babel-jest' },
  testEnvironment: 'jsdom',
};
