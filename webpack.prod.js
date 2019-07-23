const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  }
})
