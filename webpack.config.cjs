const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // publicPath: '/Odin_Restaurant_Yauncai-s_Bistro/',
    publicPath: 'auto',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', 
    }),
  ],
  devServer: {
    static: './dist',
    watchFiles: ['./src/index.html'], 
  },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
