'use strict';

const webpack = require('webpack');

const path = require('path');

module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: path.join(__dirname, 'public'),
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}