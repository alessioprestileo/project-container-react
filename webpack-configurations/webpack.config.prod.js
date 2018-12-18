const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const envSettings = require('../src/project/env-settings/private.env-settings-local.react.js');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/project/src/index.jsx',
    babelPolyfill: '@babel/polyfill',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendors_others: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors_others',
          chunks: 'all',
          priority: 1,
        },
        commons: {
          name: 'commons',
          chunks: 'all',
        },
      },
    },
  },
  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, '..', 'build_prod'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [path.resolve(__dirname, '..', 'node_modules')],
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              forceEnv: 'production',
            },
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
    'env-settings-react': JSON.stringify(envSettings),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].bundle.css',
    }),
    new HtmlWebpackPlugin({ template: './src/project/index.template.html' }),
    new CopyWebpackPlugin([{ from: './container-assets', to: './container-assets' }]),
    new CopyWebpackPlugin([{ from: './src/project/project-assets', to: './project-assets' }]),
    new CopyWebpackPlugin([{ from: './src/project/favicon.ico', to: './favicon.ico' }]),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
    }),
  ],
};
