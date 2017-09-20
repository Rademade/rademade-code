const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { env } = require('../configuration.js');
const postcssVariables  = require( './postcss/variables');
const postcssMedia  = require( './postcss/media');
const postcssFunctions  = require( './postcss/functions');
const postcssMixins  = require( './postcss/mixins');
const postcssSupport  = require( './postcss/support');

module.exports = {
  test: /\.css$/,
  use: [{
    loader: 'raw-loader',
  }, {
    loader: 'postcss-loader',
    options: {
      plugins: [
        require('postcss-import')(),
        require('postcss-nested')(),
        require('postcss-custom-properties')({ variables: postcssVariables} ),
        require('postcss-custom-media')(postcssMedia),
        require('postcss-functions')(postcssFunctions),
        require('postcss-apply')({ sets: postcssMixins }),
        require('postcss-cssnext')(postcssSupport)
      ]
    }
  }]
};
