import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

const config: webpack.Configuration = {
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            './src/index.tsx',
        ],
        vendors: Object.keys(require(path.resolve('package.json')).dependencies),
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        sourceMapFilename: 'js/[name].map',
        filename: 'js/[name].[hash].min.js',
        chunkFilename: 'js/[name].[hash].chunk.js',
    },

    devtool: 'inline-source-map', // TODO: different for prod?

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    module: {
        rules: [
            {
                test: /.*\.tsx$/,
                include: path.resolve('src'),
                use: [
                    'react-hot-loader/webpack',
                    'awesome-typescript-loader',
                ],
            },
            {
                test: /\.(css|sass|scss)$/,
                exclude : /node_modules/,
                // TODO: hot loader won't work in prod if css filename is dynamicly assigned
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
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html'),
            inject: 'body',
            filename: 'index.html',
            title: require(path.resolve('package.json')).description,
            minify: false, // TODO: minify in prod
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true,
            //     removeRedundantAttributes: true,
            //     useShortDoctype: true,
            //     removeEmptyAttributes: false,
            //     removeStyleLinkTypeAttributes: true,
            //     keepClosingSlash: true,
            //     minifyJS: true,
            //     minifyCSS: true,
            //     minifyURLs: true,
            // },
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: [
                'app',
                'vendors',
            ],
            minChunks: Infinity,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.WatchIgnorePlugin([
            /css\.d\.ts$/,
        ]),
        new ExtractTextPlugin({
            filename: 'static/css/styles.css', // TODO: chunk, hash in prod?
            disable: false, // TODO: disable in prod?
        }),
        new OptimizeCssAssetsPlugin({ // TODO: remove for prod
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: false,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
    ],

    externals: [],
    devServer: {
        hot: true,
        // hotOnly: true,
    },
    node: {
        'fs': 'empty',
        'net': 'empty',
        'tls': 'empty',
        'should': 'empty',
        'sinon-restore': 'empty',
        'child_process': 'empty',
    },
};

export default config;
