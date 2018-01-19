const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-nextjs-template:app', () => {
  beforeAll(() =>
    helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      appName: 'test',
      description: 'test description',
      name: 'test name'
    })
  );

  it('creates files', () => {
    assert.file([
      './test/package.json',
      './test/.gitignore',
      './test/.babelrc',
      './test/.env',
      './test/.eslintignore',
      './test/.eslintrc.js',
      './test/.sasslintrc',
      './test/docker-compose.yml',
      './test/Dockerfile',
      './test/global-config.js',
      './test/jest.config.js',
      './test/jest.setup.js',
      './test/next.config.js',
      './test/postcss.config.js'
    ]);
  });

  it('creates folders', () => {
    assert.file([
      './test/assets',
      './test/components',
      './test/configs',
      './test/lib',
      './test/locales',
      './test/pages',
      './test/server.js'
    ]);
  });
});
