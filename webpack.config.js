const path = require("path");

const SERVER_VIEWS_DIRECTORY = path.resolve(__dirname, "./server/views");
const SERVER_PUBLIC_DIRECTORY = path.resolve(__dirname, "./server/public");

const commonConfig = {
  mode: "development",
  devtool: "source-map",
  entry: {
    // for each page, add an entry here
    Home: path.join(__dirname, "./client/src/pages/Home/index.tsx"),
  },
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
  externals: {
    react: "react",
    "react-dom": "reactDOM",
  },
};

const serverConfig = {
  ...commonConfig,
  target: "node",
  output: {
    filename: "[name].node.js",
    path: SERVER_VIEWS_DIRECTORY,
    libraryTarget: "commonjs2",
  },
};

const clientConfig = {
  ...commonConfig,
  target: "web",
  output: {
    filename: "[name].js",
    path: SERVER_PUBLIC_DIRECTORY,
  },
};

module.exports = [serverConfig, clientConfig];
