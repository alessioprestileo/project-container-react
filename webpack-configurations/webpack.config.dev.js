const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const envSettingsReact = require('../src/project/env-settings/private.env-settings-local.react.js');

module.exports = {
  mode: 'development',
  entry: [
    '@babel/polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr',
    './src/project/src/index.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'build_dev'),
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [path.resolve(__dirname, '..', 'node_modules')],
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              forceEnv: 'development',
            },
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader'),
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: 30000,
              fallback: require.resolve('file-loader'),
            },
          },
        ],
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: require.resolve('file-loader'),
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    'env-settings-react': JSON.stringify(envSettingsReact),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/project/index.template.html',
    }),
    new CopyWebpackPlugin([{ from: './container-assets', to: './container-assets' }]),
    new CopyWebpackPlugin([{ from: './src/project/project-assets', to: './project-assets' }]),
    new CopyWebpackPlugin([{ from: './src/project/favicon.ico', to: './favicon.ico' }]),
  ],
};
