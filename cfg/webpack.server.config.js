const path = require('path')
const nodeExternals = require('webpack-node-externals')

const NODE_ENV = process.env.NODE_ENV
const globalCssRegExp = /\.global\.scss$/i

module.exports = {
    target: "node",
    stats: 'minimal',
    externals: [nodeExternals()],
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server') ,
        filename: 'server.js',
        publicPath: '/static/',
        assetModuleFilename: '[name][ext]'
    },
    module: {
        rules: [
            {
                test: /.[tj]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    {
                        loader: 'css-loader',
                        options:{
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                                exportOnlyLocals: true
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
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    emit: false
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            Assets: path.resolve(__dirname, '../src/assets')
        }
    },
    optimization: {
        minimize: false
    }
}