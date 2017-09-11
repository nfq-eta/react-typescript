module.exports = function (wallaby) {

    return {
        files: [
            {
                pattern: 'src/**/*.tsx',
                // load: false
            },
            {
                pattern: 'src/**/*.test.tsx',
                ignore: true
            },
        ],

        tests: [
            {
                pattern: 'src/**/*.test.tsx',
                // load: false
            }
        ],
        env: {
            type: 'node',
        },
        testFramework: 'jest',
        compilers: {
            '**/*.tsx': wallaby.compilers.typeScript()
        },
        setup(wallaby) {
            const jestConfig = require('./package.json').jest;
            jestConfig.testEnvironment = 'jsdom';
            wallaby.testFramework.configure(jestConfig);
        },
    };
};
