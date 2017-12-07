// Note: You must restart bin/webpack-dev-server for changes to take effect

/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */

var path = require('path');
const webpack = require('webpack');
const {basename, dirname, join, relative, resolve} = require('path');
const {sync} = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const extname = require('path-complete-extname');
const {env, settings, output, loadersDir} = require('./configuration.js');

const extensionGlob = `**/*{${settings.extensions.join(',')}}*`;
const entryPath = join(settings.source_path, settings.source_entry_path);
const packPaths = sync(join(entryPath, extensionGlob));

module.exports = {

  entry: packPaths.reduce(
    (map, entry) => {
      const localMap = map;
      const namespace = relative(join(entryPath), dirname(entry));
      localMap[join(namespace, basename(entry, extname(entry)))] = resolve(entry);
      return localMap
    }, {}
  ),
  resolve: {
    modules: [
      "./",
      "node_modules",
      "components",
      "services",
      "models",
      "pipes",
      "helpers",
      "directives",
      "../assets/sprite",
      "../assets/fonts/fonts.js"
    ],
    alias: {
      nodeModules: "node_modules",
      services: "services",
      components: "components",
      pipes: "pipes",
      directives: "directives",
      sprites: "../assets/sprite",
      fonts: "../assets/fonts/fonts.js",
    },
    extensions: ['.ts', '.js', '.json', '.svg', '.css', '.html'],
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name]-chunk.[hash].js',
    path: output.path,
    publicPath: output.publicPath
  },

  module: {
    rules: sync(join(loadersDir, '*.js')).map(loader => require(loader))
  },

  plugins: [
    new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(env))),
    new ExtractTextPlugin(env.NODE_ENV === 'production' ? '[name]-[hash].css' : '[name].css'),
    new ManifestPlugin({
      publicPath: output.publicPath,
      writeToFileEmit: true
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
         root('./oms'), // location of your src
      { }
    )
  ]
};

// console.log('b',relative(join(entryPath), dirname('/oms')), join(entryPath), entryPath);
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
