require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_, arg) => {
  const { mode } = arg;

  process.env.NODE_ENV = mode;

  const isProduction = mode === 'production';
  const filename = mode !== 'production' ? '[name]' : '[name].[contenthash]';

  return {
    entry: './src/main.js',

    devtool: 'source-map',

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: `${filename}.js`,
      assetModuleFilename: isProduction ? '[hash][ext][query]' : '[name][ext]',
      clean: true
    },

    resolve: {
      extensions: ['.js', '.vue', '.css'],
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    },

    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader'
        },
        {
          test: /\.js$/,
          include: /public_html/,
          exclude: /(node_modules|vendors)/,
          use: ['babel-loader']
        },
        {
          test: /\.(css|scss)$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
          type: 'asset/resource'
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        inject: 'body',
        template: './public/index.html',
        filename: './index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: false
        }
      }),

      new Dotenv({ path: '.env' }),

      new MiniCssExtractPlugin({ filename: `${filename}.css` })
    ],

    devServer: {
      port: 3000
    }
  };
};
