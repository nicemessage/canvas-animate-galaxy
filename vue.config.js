const path = require('path');
const webpack = require('webpack');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    publicPath:'/test/',
  // 基本路径
  configureWebpack:{

    plugins: [
          new MonacoWebpackPlugin(),
        new webpack.ProvidePlugin({
            // other modules
            introJs: ['intro.js', 'introJs']
        })
    ]
  },
    devServer: {
        // proxy: 'http://localhost:3000'
    }
};
