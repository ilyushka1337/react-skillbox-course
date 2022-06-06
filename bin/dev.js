const webpack = require('webpack')
const [clientConfig, serverConfig] = require('../webpack.config')
const nodemon = require('nodemon')
const path = require('path')
const express = require('express');
const wdm = require("webpack-dev-middleware")
const whm = require("webpack-hot-middleware")

const clientCompiler = webpack(clientConfig)
const serverCompiler = webpack(serverConfig)

serverCompiler.watch({}, () => console.log('server compiled'));

const hmr = express()
hmr.use(wdm(clientCompiler,{
    publicPath: clientConfig.output.publicPath,
    serverSideRender: true,
    writeToDisk: true,
    stats: "errors-only"
}))
hmr.use(whm(clientCompiler, {
    path: "/static/__webpack__hmr"
}))

hmr.listen(3001, () => {
    console.log("HMR started")
})

nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
        path.resolve(__dirname, '../dist/server'),
    ]
})