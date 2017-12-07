module.exports = {
  test: /\.ts$/,
  use: [
    {loader: 'awesome-typescript-loader'},
    {loader: 'angular2-template-loader'}
  ],
  exclude: [/\.(spec|e2e)\.ts$/]
};
