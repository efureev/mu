/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/tests/utils.ts'],

  transform: {
    '^.+\.ts$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },

  moduleNameMapper: {
    '^@feugene/mu$': '<rootDir>/src/index.ts',
    '^@feugene/mu/format$': '<rootDir>/src/format/index.ts',
    '^@feugene/mu/object$': '<rootDir>/src/object/index.ts',
    '^@feugene/mu/is$': '<rootDir>/src/is/index.ts',
    '^@feugene/mu/to$': '<rootDir>/src/to/index.ts',
    '^~/(.*)$': '<rootDir>/src/$1',
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
  coverageProvider: 'v8',
  moduleFileExtensions: ['ts', 'js', 'json'],
}
