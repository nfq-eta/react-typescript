import * as webpack from 'webpack';
import webpackCommon from './webpack.common';
import { strategy } from 'webpack-merge';
import * as DashboardPlugin from 'webpack-dashboard/plugin';
import * as Dashboard from 'webpack-dashboard';

const dashboard = new Dashboard();

const config: webpack.Configuration = strategy(
    {
        plugins: 'prepend',
    },
)(webpackCommon, {
    plugins: [
        new DashboardPlugin(dashboard.setData),
    ],
});

export default config;
