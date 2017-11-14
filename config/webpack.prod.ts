import * as webpack from 'webpack';
import { strategy } from 'webpack-merge';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import webpackCommon from './webpack.common';

const config: webpack.Configuration = strategy(
    {
        devtool: 'prepend',
        plugins: 'prepend',
    },
)(webpackCommon, {
    devtool: false,

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html'),
            inject: 'body',
            filename: 'index.html',
            title: require(path.resolve('package.json')).description,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: false,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: false,
        }),
    ],
});

export default config;
