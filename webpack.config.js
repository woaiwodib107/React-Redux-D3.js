var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',//服务器
    'webpack/hot/only-dev-server',//热替换
    // 'react-hot-loader/patch',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css', {
        allChunks: true
    })
  ],
  resolve: {
    alias: {
      'redux-devtools': path.join(__dirname, '..', '..', 'src'),
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js', '.jsx']
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [{
      test: [/\.jsx$/, /\.js$/],
      loaders: ["babel"],
      exclude: /node_modules/
    },
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
    }
    ]
  }
};
