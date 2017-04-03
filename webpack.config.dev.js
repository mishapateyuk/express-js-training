import path from 'path';

export default {
  devtool: "source-map",
  entry: path.join(__dirname, './client/index.js'),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
        ],
        loader: "babel-loader",
      }
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
