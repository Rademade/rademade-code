const { join } = require('path');

module.exports = {
  test: /\.(jpg|jpeg|png|gif|eot|ttf|woff|woff2)$/i,
  use: [{
    loader: 'file-loader',
    options: {
      // publicPath,
      name: '[name].[ext]'
    }
  }]
};
