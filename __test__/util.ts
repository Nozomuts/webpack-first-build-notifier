import webpack from "webpack";
import path from "path";
import WebpackFirstBuildNotifierPlugin from "../src/index";

export const getWebpackConfig = (): webpack.Configuration => ({
  entry: path.resolve(__dirname, "index.js"),
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    new WebpackFirstBuildNotifierPlugin({
      title: "Build Notification Test",
    }),
  ],
});

export const compile = (compiler: webpack.Compiler) => {
  return new Promise((resolve, reject) => {
    return compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      return resolve(stats);
    });
  });
};
