const NODE_ENV = process.env.NODE_ENV || "development";
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var path = require('path');
var webpack = require('webpack');

module.exports = {

  watch: true,
  entry: ['./index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new ExtractTextPlugin("/style.css")
  ],

  resolveLoader: {
    moduleExtensions: ['-loader']
  },

    devtool: NODE_ENV == 'development' ? "source-map" : false,
  
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: NODE_ENV == 'development',
                minimize: NODE_ENV == 'production'
              }
            },
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: NODE_ENV == 'development'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    browsers: ['last 4 version']
                  })
                ],
                sourceMap: 'inline'
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: NODE_ENV == 'development'
              }
            }
          ]
        })

      },

      {
        test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};
