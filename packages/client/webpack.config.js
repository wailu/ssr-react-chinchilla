const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { constants } = require("common");

const { SERVER_VIEWS_DIRECTORY } = constants;

const commonConfig = {
  mode: "development",
  devtool: "source-map",
  entry: path.join(__dirname, "src/App.tsx"),
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
    filename: "bundle.node.js",
    path: SERVER_VIEWS_DIRECTORY,
    libraryTarget: "commonjs2",
  },
};

const clientConfig = {
  ...commonConfig,
  target: "web",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
      inject: "body",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
  },
};

module.exports = [serverConfig, clientConfig];
