module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'google-apps-script': '<rootDir>/tests/mocks/google-apps-script.ts'
  },
  testMatch: ['**/tests/**/*.test.ts']
};
