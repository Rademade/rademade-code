module.exports = {
  test: /\.scss$/,
  use: [{
    loader: 'raw-loader',
  }, {
    loader: 'sass-loader',
  }]
};
