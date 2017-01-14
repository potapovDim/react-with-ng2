const path = require('path')
const webpack = require('webpack')

module.exports = {
  cache: true,
  devtool: 'source-map',
  entry: {
   vendor: './src/vendor',
   polyfills: './src/polyfills',
   main: './src/main'
  },
  output: {
    path: path.join(__dirname,''),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
  },
  devServer: {
    port: 5050,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {test: /\.ts$/, loaders:['ts-loader', 'angular2-template-loader']},
      {test: /\.tsx$/, loader: 'react-hot!ts-loader?jsx=true'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.html$/, loader: 'raw-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.json']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name:['polyfills']})
  ]
}