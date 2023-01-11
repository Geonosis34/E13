const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src'),
    plugins: [
        new HtmlWebpackPlugin({
     title: 'Development',
   }),
        new webpack.HotModuleReplacementPlugin(),
 ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        static: './dist',
        port: 3001,
        hot: true,
      },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    }
}