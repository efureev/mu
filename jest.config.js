/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/tests/utils.ts'],

  transform: {
    '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.json', isolatedModules: true }],
  },

  collectCoverageFrom: [
    '**/src/**/*.{js,ts}',
    '!**/node_modules/**',
    '!**/src/config.ts',
    '!**/src/**/index.ts',
    '!**/src/i18/ru.ts',
    '!**/src/i18/var.ts',
    '!**/src/internal/free/*',
    '!**/src/internal/root.ts',
    '!**/src/internal/types.ts',
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  coverageProvider: 'v8',
  moduleFileExtensions: ['ts', 'js', 'json'],
}
