import * as path from 'path';
import * as webpack from 'webpack';
import * as DotenvPlugin from 'webpack-dotenv-plugin';

export const config: webpack.Configuration = {
    entry: {
        server: ['./src/server/index.tsx'],
    },

    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },

    externals: [
        /^[a-z\-0-9]+$/, // Ignore node_modules folder
    ],

    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        pathinfo: true,
        path: path.resolve(__dirname, '../dist'),
    },

    devtool: false,

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: ['node_modules'],
    },

    module: {
        rules: [
            {
                test: /.*\.tsx?$/,
                include: path.resolve('src'),
                use: ['ts-loader'],
            },
            {
                test: /\.s?css$/,
                loader: 'css-loader/locals?module&camelcase&&!sass-loader',
                exclude: /node_modules/,
            },
        ],
    },

    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new DotenvPlugin({
            sample: '.env.example',
            path: `.env.${process.env.NODE_ENV}`,
            allowEmptyValues: true,
        }),
    ],
};
