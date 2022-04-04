const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const pathAlias = require('./tsconfig.paths.json').compilerOptions.paths;

const moduleNameMapper = {};
for (let x in pathAlias) {
  let item = pathAlias[x];

  moduleNameMapper[`^${x.replace('/*', '')}/(.*)$`] = `<rootDir>${item[0]
    .replace('.', '')
    .replace('/*', '/$1')}`;
}

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper,
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
