/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: '../coverage',
  coverageProvider: 'v8',
  rootDir: './src',
  moduleNameMapper: {
    '^@modules/(.*)$': '<rootDir>/modules/$1',
    '^@database/(.*)$': '<rootDir>/prisma/$1',
    '@utils/(.*)$': '<rootDir>/utils/$1'
  },
  preset: 'ts-jest'
};
