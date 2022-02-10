const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = env => {
  return {
    entry: './src/index.tsx',
    ...(env.production || !env.development ? {} : { devtool: 'eval-source-map' }),
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.woff', '.woff2', '.ttf'],
      plugins: [new TsconfigPathsPlugin()],
    },
    output: {
      path: path.join(__dirname, 'public/dist/'),
      chunkFilename: '[id].[contenthash].js',
      publicPath: '/',
    },
    devServer: {
      publicPath: '/',
      contentBase: './public',
      hot: true,
      historyApiFallback: true,
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        },
        {
          test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf)$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                native: false,
              },
            },
            {
              loader: 'url-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.PRODUCTION': env.production || !env.development,
      }),
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          files: './src/**/*.{ts,tsx,js}',
        },
      }),
      new Dotenv({
        path: '.env',
      }),
    ],
  };
};
