const path = require('path');
const common = require('./webpack.config');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']   
            }
        ]
    },

    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ]
    },

    plugins: [
       new CleanWebpackPlugin(),
     
       new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),

       new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/assets/icon.ico',
        inject: true,
        minify: {
            removeAtttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
        },

    })

    ]
    

});