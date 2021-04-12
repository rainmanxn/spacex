const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, './src/actions/'),
      components: path.resolve(__dirname, './src/components/'),
      consts: path.resolve(__dirname, './src/consts/'),
      decorators: path.resolve(__dirname, './src/decorators/'),
      reducers: path.resolve(__dirname, './src/reducers/'),
      store: path.resolve(__dirname, './src/store/'),
      styles: path.resolve(__dirname, './src/styles/'),
      pages: path.resolve(__dirname, './src/pages/'),
      assets: path.resolve(__dirname, './src/assets/'),
      shared: path.resolve(__dirname, './src/shared/'),
      types: path.resolve(__dirname, './src/types/'),
      utils: path.resolve(__dirname, './src/utils/'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              publicPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    port: 8080,
    host: '0.0.0.0',
    public: 'localhost:8080',
  },
};
