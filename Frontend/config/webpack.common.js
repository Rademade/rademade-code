const webpack = require('webpack');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');

const loadersDir = join(__dirname,'loaders');
const { sync } = require('glob');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    // 'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json', '.svg', '.css', '.scss', '.html'],
    modules: [
      "./",
      "../assets",
      "node_modules",
      "@components",
      "@services",
      "@models",
      "@helpers",
      "@directives",
      "@resolvers",
      "../assets/sprite",
      "../assets/fonts/fonts.js"
    ],
    alias: {
      assets: '../assets',
      nodeModules: "node_modules",
      "@services": "services",
      "@models": "models",
      "@helpers": "helpers",
      "@components": "components",
      "@directives": "directives",
      "@resolvers": "resolvers",
      sprites: "../assets/sprite",
      fonts: "../assets/fonts/fonts.js"
    }
  },

  module: {
    rules: sync(join(loadersDir, '*.js')).map(loader => require(loader))
  },

  plugins: [
    // Workaround for angular/angular#11580
    new ExtractTextPlugin('[name].js'),

    new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)@angular/,
        helpers.root('./src'), // location of your src
        {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new CopyWebpackPlugin([{
      from: 'src/assets', to: 'assets'
    }])
  ]
};
