var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'main.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        loaders: [
          { test: /\.jsx$/, loader: 'jsx-loader' },
          { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.less$/, loader: "style!css!less" }
        ]
    },
    resolve: {
        extensions: ['', '.js', 'jsx', '.json']
    },
    plugins: [
      //new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
      //new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-tw/),
      //new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ]
};