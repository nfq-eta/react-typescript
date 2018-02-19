// @ts-check
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

require('ts-node').register({ filename: '../webpack.prod.ts' });
const webpackConfig = require('../webpack.prod').config;

module.exports = {
    plugins: [new TSDocgenPlugin()],
    resolve: {
        extensions: webpackConfig.resolve.extensions,
    },
    module: {
        rules: [
            webpackConfig.module.rules[0],
            {
                test: /\.(css|sass|scss)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            importLoaders: 2,
                        },
                    },
                    { loader: 'resolve-url-loader' },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
        ],
    },
};
