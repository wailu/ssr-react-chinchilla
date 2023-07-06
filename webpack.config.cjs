const path = require("path");

const SERVER_VIEWS_DIRECTORY = path.resolve(__dirname, "./server/views");
const CLIENT_BUILD_DIRECTORY = path.resolve(__dirname, "./client/build");

const commonConfig = {
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  entry: {
    bootstrap: path.join(__dirname, "./client/src/bootstrap.tsx"),
    App: path.join(__dirname, "./client/src/App.tsx"),
    // for each page, add an entry here
    Home: path.join(__dirname, "./client/src/pages/Home/index.tsx"),
    About: path.join(__dirname, "./client/src/pages/About/index.tsx"),
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
  output: {
    filename: "[name].js",
    path: CLIENT_BUILD_DIRECTORY,
    library: ["pages", "[name]"],
    libraryTarget: "umd",
  },
};

module.exports = [serverConfig, clientConfig];
