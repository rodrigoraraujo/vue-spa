/*
 * File: i:\projects\vue\vue-spa\build\webpack.base.config.js
 * Project: i:\projects\vue\vue-spa
 * Created Date: 18/07/2019
 * Author: Rodrigo Ramalho Araujo
 * Copyright (c) 2019 PRODAM
 */
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const config = {
  mode: 'none',

  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /(\.js$)|(\.vue$)/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /(\.css$)|(\.scss$)/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]_[hash:base64:5]'
                }
              }
            ]
          },
          {
            use: ['vue-style-loader', 'css-loader', 'sass-loader']
          }
        ]
      }
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   exclude: /node_modules/
      // }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  // We don't need to compile our templates on the fly anymore
  // resolve: {
  //   alias: {
  //     vue: 'vue/dist/vue.js'
  //   }
  // },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  }
};

module.exports = config;