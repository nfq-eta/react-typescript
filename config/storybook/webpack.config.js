// @ts-check
require("ts-node").register(
    {filename: '../webpack.prod.ts'}
);
const webpacConfig = require('../webpack.prod').default;

module.exports = {
    plugins: [
        // your custom plugins
    ],
    resolve: {
        extensions: webpacConfig.resolve.extensions,
    },
    module: {
        rules: [
            webpacConfig.module.rules[0],
            {
                test: /\.(css|sass|scss)$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            importLoaders: 2,
                        },
                    },
                    {loader: 'resolve-url-loader'},
                    {loader: 'sass-loader', options: {sourceMap: true}},
                ],
            },
        ]
    },
};
