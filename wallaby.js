module.exports = function () {
  return {
    files: [
      'src/**/*.ts?(x)',
      'src/**/*.snap',
      'src/**/*.?(s)css',
      '!src/**/*.test.ts?(x)',
      '!src/**/*.story.ts?(x)',
      '!src/**/*.json'
    ],
    tests: [
      'src/**/*.test.tsx'
    ],
    env: {
      type: 'node'
    },
    preprocessors: {
      '**/*.js': file => require('babel-core').transform(
        file.content,
        {sourceMap: true, plugins: ['transform-es2015-modules-commonjs'], presets: ['babel-preset-jest']})
    },
    testFramework: 'jest'
  };
};
