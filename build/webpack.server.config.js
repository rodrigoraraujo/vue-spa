const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.base.config');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const config = Object.assign({}, base, {
  entry: path.resolve(__dirname, '../src/server-entry.js'),
  target: 'node',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server/[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: /(\.css$)|(\.scss$)/
  }),
  plugins: [new VueLoaderPlugin(), new MiniCssExtractPlugin()]
});

module.exports = config;
