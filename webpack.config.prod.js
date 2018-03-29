// import webpack from 'webpack';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
// import WebpackMd5Hash from 'webpack-md5-hash';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import autoprefixer from 'autoprefixer';
// import path from 'path';

// const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const folderName = new Date().getTime();


module.exports = {
  mode: 'production',
  devtool: 'source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  entry: [
    // must be first entry to properly set public path
    path.resolve(__dirname, 'src/index.js') // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.resolve(__dirname, 'dist/' + folderName + '/'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: 'http://127.0.0.1/' + folderName + '/',
    // publicPath: 'http://static-test.dominos.com.cn/' + folderName + '/',
    filename: '[name].[hash].js'
  },
  plugins: [
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[hash].css'),

    // Generate HTML file that contains references to generated bundles. See here for how this works: https://github.com/ampedandwired/html-webpack-plugin#basic-usage
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
      // Note that you can add custom options here if you need to handle other custom logic in index.html
      // To track JavaScript errors via TrackJS, sign up for a free trial at TrackJS.com and enter your token below.
      trackJSToken: ''
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        //type: 'javascript/auto',
        loader: 'file-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        //type: 'javascript/auto',
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        //type: 'javascript/auto',
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        //type: 'javascript/auto',
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        //type: 'javascript/auto',
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.ico$/,
        //type: 'javascript/auto',
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }],
          // use style-loader in development 
          fallback: "style-loader"
        })
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};