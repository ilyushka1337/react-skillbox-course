const path = require('path')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV
const IS_DEV = NODE_ENV === 'development'
const globalCssRegExp = /\.global\.scss$/i

const devEntries = [
    path.resolve(__dirname, '../src/client/index.jsx'),
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack__hmr&quiet=true'
]
const prodEntries = [
    path.resolve(__dirname, '../src/client/index.jsx'),
]

module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    stats: 'minimal',
    entry: IS_DEV ? devEntries : prodEntries,
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        publicPath: "/static/",
        filename: 'client.js',
        assetModuleFilename: '[name][ext]'
    },
    module: {
        rules: [
            {
                test: /.[tj]sx?$/,
                use: [
                    {
                        loader: require.resolve('ts-loader'),
                        options: {
                            getCustomTransformers: () => ({
                                before: [IS_DEV && ReactRefreshTypeScript()].filter(Boolean),
                            }),
                            transpileOnly: IS_DEV,
                        },
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options:{
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    'sass-loader'
                ],
                exclude: globalCssRegExp
            },
            {
                test: globalCssRegExp,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            Assets: path.resolve(__dirname, '../src/assets')
        }
    },
    plugins: IS_DEV ? [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['*.hot-update.*']
        })
    ] : [],
    devtool: 'source-map'
}