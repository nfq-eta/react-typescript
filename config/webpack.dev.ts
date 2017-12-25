import * as webpack from 'webpack';
import { webpackCommon } from './webpack.common';
import { strategy } from 'webpack-merge';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as path from 'path';
import * as DashboardPlugin from 'webpack-dashboard/plugin';
import * as Dashboard from 'webpack-dashboard';
import * as DotenvPlugin from 'webpack-dotenv-plugin';

const dashboard = new Dashboard();

export const config: webpack.Configuration = strategy(
    {
        plugins: 'prepend',
    },
)(webpackCommon, {
    entry: {
        app: [
            'react-hot-loader/patch',
            './src/client/index.tsx',
        ],
    },

    output: {
        sourceMapFilename: 'js/[name].map',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].chunk.js',
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /.*\.tsx$/,
                include: path.resolve('src'),
                use: [
                    'react-hot-loader/webpack',
                    'awesome-typescript-loader?silent',
                ],
            },
            {
                test: /\.(css|sass|scss)$/,
                exclude : /node_modules/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'typings-for-css-modules-loader',
                            options: {
                                modules: true,
                                sourceMap: true,
                                namedExport: true,
                                camelCase: true,
                                importLoaders: 2,
                            },
                        },
                        { loader: 'resolve-url-loader' },
                        { loader: 'sass-loader', options: { sourceMap: true } },
                    ],
                }) as any),
            },
        ],
    },

    plugins: [
        new DashboardPlugin(dashboard.setData),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.WatchIgnorePlugin([
            /css\.d\.ts$/,
        ]),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/client/index.html'),
            inject: 'body',
            filename: 'index.html',
            title: require(path.resolve('package.json')).description,
            minify: false,
        }),
        new ExtractTextPlugin('css/styles.css'),
        new DotenvPlugin({
            sample: '.env.example',
            path: '.env',
            allowEmptyValues: true,
        }),
    ],
    devServer: {
        hot: true,
        quiet: true,
        historyApiFallback: true,
    },
});
