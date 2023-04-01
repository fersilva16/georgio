const DotenvWebpackPlugin = require('dotenv-webpack');
const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new DotenvWebpackPlugin({
      path: path.join(__dirname, '.env'),
    }),
  ],
});
