module.exports = {
  test: /\.(ts|js)$/,
  use: [
    {loader: 'angular-router-loader'}
  ],
  exclude: [/\.(spec|e2e)\.ts$/]
};
