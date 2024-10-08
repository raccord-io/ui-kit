const config = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/$1',
    minidenticons: '<rootDir>/__mocks__/minidenticons.js',
  },
};

module.exports = config;
