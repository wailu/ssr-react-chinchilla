const path = require("path");
const { CLIENT_BUILD_DIRECTORY, STATIC_BASE_PATH } = require("./constants.cjs");

module.exports = {
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  target: "web",
  entry: {
    bootstrap: path.join(__dirname, "./client/src/bootstrap.tsx"),
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    path: CLIENT_BUILD_DIRECTORY,
    publicPath: STATIC_BASE_PATH,
  },
};
