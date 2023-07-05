const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

const SERVER_VIEWS_DIRECTORY = path.resolve(__dirname, "./server/views");
const CLIENT_BUILD_DIRECTORY = path.resolve(__dirname, "./client/build");

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
  target: "node",
  entry: {
    // for each page, add an entry here
    Home: path.join(__dirname, "./client/src/pages/Home/index.tsx"),
    About: path.join(__dirname, "./client/src/pages/About/index.tsx"),
  },
  output: {
    filename: "[name].node.js",
    path: SERVER_VIEWS_DIRECTORY,
    libraryTarget: "commonjs2",
  },
  externalsType: "commonjs",
  externals: {
    react: "react",
  },
};

const clientConfig = {
  ...commonConfig,
  target: "web",
  entry: {},
  output: {
    filename: "[name].js",
    path: CLIENT_BUILD_DIRECTORY,
    library: ["pages", "[name]"],
    libraryTarget: "umd",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "provider",
      filename: "remoteEntry.js",
      exposes: {
        utils: path.join(__dirname, "./client/src/utils/index.ts"),
        Home: path.join(__dirname, "./client/src/pages/Home/index.tsx"),
        About: path.join(__dirname, "./client/src/pages/About/index.tsx"),
      },
    }),
  ],
};

module.exports = [serverConfig, clientConfig];
