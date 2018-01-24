const path = require('path');

module.exports = {
  entry: './admin.js',
  output: {
    filename: 'admin.bundle.js',
    path: path.resolve(__dirname, '../static/admin/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react'],
          },
        },
      },
    ],
  },
};
