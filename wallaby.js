module.exports = function() {
    return {
        files: [
            {
                pattern: 'src/**/*.tsx',
                load: false,
            },
            {
                pattern: 'src/**/*.json',
                load: false,
            },
            {
                pattern: 'src/**/*.test.tsx',
                ignore: true,
            },
            {
                pattern: 'src/**/*.story.tsx',
                ignore: true,
            },
            {
                pattern: 'src/client/index.tsx',
                ignore: true,
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
        setup(wallaby) {
            const jestConfig = require('./package.json').jest;
            jestConfig.testEnvironment = 'jsdom';
            wallaby.testFramework.configure(jestConfig);
        },
    };
};
