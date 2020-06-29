const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['./src/client/index.js'],
    node: {
        fs: 'empty'
    },
    mode: 'development',
    devtool: 'source-map',
    stats: 'errors-warnings',
    target: 'web',
    output: {
        libraryTarget: 'umd',
        library: 'Client',
        umdNamedDefine: true, // optional
        globalObject: 'this' // optional
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}