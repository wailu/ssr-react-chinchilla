const path = require("path");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const {
  SERVER_VIEWS_DIRECTORY,
  CLIENT_BUILD_DIRECTORY,
  STATIC_BASE_PATH,
} = require("./constants.cjs");

const commonConfig = {
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
};

const serverConfig = {
  ...commonConfig,
  target: "es2020",
  experiments: { outputModule: true },
  entry: {
    App: path.join(__dirname, "./client/src/App.tsx"),
  },
  output: {
    filename: "[name].js",
    path: SERVER_VIEWS_DIRECTORY,
    libraryTarget: "module",
  },
  externals: {
    react: "react",
    "react-router-dom": "react-router-dom",
  },
};

const clientConfig = {
  ...commonConfig,
  target: "web",
  entry: {
    bootstrap: path.join(__dirname, "./client/src/bootstrap.tsx"),
    App: path.join(__dirname, "./client/src/App.tsx"),
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    path: CLIENT_BUILD_DIRECTORY,
    publicPath: "/",
  },
  plugins: [new WebpackManifestPlugin({ basePath: STATIC_BASE_PATH })],
};

module.exports = [serverConfig, clientConfig];
