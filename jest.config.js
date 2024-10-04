// module.exports = {
//     preset: 'jest-preset-angular',
//     setupFilesAfterEnv: ['<rootDir>/src/setup.jest.ts'],
// };

module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/setup.jest.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
    collectCoverage: true,
    coverageReporters: ['html', 'lcov', 'text'],
  };