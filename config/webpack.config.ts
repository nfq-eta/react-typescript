import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === "development";

const config: webpack.Configuration = {
    entry: {
        app: [
            "react-hot-loader/patch",
            "./src/index.tsx",
        ],
        vendors: Object.keys(require(path.resolve("package.json")).dependencies),
    },

    output: {
        path: path.resolve(__dirname, "../dist"),
        sourceMapFilename: "js/[name].map",
        filename: "js/[name].[hash].min.js",
        chunkFilename: "js/[name].[hash].chunk.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["react-hot-loader/webpack", "awesome-typescript-loader"],
            },
            {
                enforce: "pre",
                test: /\.js$/,
                use: "source-map-loader",
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("./src/index.html"),
            inject: "body",
            filename: "index.html",
            title: require(path.resolve("package.json")).description,
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
                "app",
                "vendors",
            ],
            minChunks: Infinity,
        }),
        // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        /*new webpack.optimize.CommonsChunkPlugin({
            names: ['vendors'],
            filename: '[name].js'
        }),*/
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        // "react": "React",
        // "react-dom": "ReactDOM"
    },
    devServer: {
        hot: true,
        hotOnly: true,
    },
};

export default config;
