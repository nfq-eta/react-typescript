import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';
const extractSass = new ExtractTextPlugin({
    filename: 'static/css/[name].[chunkhash:8].min.css',
    disable: isDev,
});

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

    devtool: isDev ? 'source-map' : false,

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    module: {
        rules: [
            { test: /\.json$/, loader: 'json-loader' },
            {
                test: /^(?!.*\.test\.tsx$).*\.tsx$/,
                use: [
                    'react-hot-loader/webpack',
                    'babel-loader',
                    'awesome-typescript-loader',
                ],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader',
            },
            {
                test: /\.s?css$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: 'typings-for-css-modules-loader',
                            options: {
                                modules: true,
                                sourceMap: isDev,
                                namedExport: true,
                                camelCase: true,
                                importLoaders: 2,
                            },
                        },
                        { loader: 'resolve-url-loader' },
                        { loader: 'sass-loader', options: { sourceMap: isDev } },
                    ],
                    fallback: 'style-loader',
                }),
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html'),
            inject: 'body',
            filename: 'index.html',
            title: require(path.resolve('package.json')).description,
            minify: isDev ? false : {
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
        extractSass,
        isDev ? new OptimizeCssAssetsPlugin({
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: false,
        }) : () => {},
    ],

    externals: [],
    devServer: {
        hot: true,
        // hotOnly: true,
    },
};

export default config;
