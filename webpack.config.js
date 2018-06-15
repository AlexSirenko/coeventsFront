'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');


module.exports = {

    context: __dirname + '\\development',

    entry: {
        bundle: './js/app.jsx'
    },

    output: {
        filename: '[name].js',
        path: __dirname + '\\public\\build',
        publicPath: "/build/",
        library: '[name]'
    },

    watch: NODE_ENV === 'development',

    resolve: {
        extensions: [' ', '.js', '.jsx']
    },

    devtool: NODE_ENV ==='development' ? 'source-map' : false,

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: ['env', 'react', 'stage-0']
                    }
                }
            }
        ]
    }
};

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // don't show unreachable variables etc
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}