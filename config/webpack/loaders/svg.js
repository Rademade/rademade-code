module.exports = {
  test: /\.svg$/,
  use: [
    'svg-sprite-loader',
    'svgo-loader'
  ]
};