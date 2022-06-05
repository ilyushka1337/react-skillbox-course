const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const nodemon = require('nodemon')
const path = require('path')

const compiler = webpack(webpackConfig)

compiler.run((error) => {
    if (error)
        console.log('Compile error: ', error)

    compiler.watch({}, (err) => {
        if (err)
            console.log('Compile error: ', err)
    })

    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client')
        ]
    })
})