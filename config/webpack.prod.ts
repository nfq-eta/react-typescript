import * as webpack from 'webpack';
import { strategy } from 'webpack-merge';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import { webpackCommon } from './webpack.common';
import * as DotenvPlugin from 'webpack-dotenv-plugin';

export const config: webpack.Configuration = strategy(
    {
        plugins: 'prepend',
    },
)(webpackCommon, {
    entry: {
        app: [
            'babel-polyfill',
            './src/client/index.tsx',
        ],
    },

    output: {
        filename: 'js/[name].[hash].min.js',
        chunkFilename: 'js/[name].[hash].chunk.js',
    },

    devtool: false,

    module: {
        rules: [
            {
                test: /.*\.tsx$/,
                include: path.resolve('src'),
                use: [
                    'awesome-typescript-loader',
                ],
            },
            {
                test: /\.(css|sass|scss)$/,
                exclude : /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
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
                }),
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./src/client/index.html'),
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
        new ExtractTextPlugin('static/css/[name].[chunkhash:8].min.css'),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: false,
        }),
        new DotenvPlugin({
            sample: '.env.example',
            path: `.env.${process.env.NODE_ENV}`,
        }),
    ],
});
