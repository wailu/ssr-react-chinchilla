const path = require("path");

const SERVER_VIEWS_DIRECTORY = path.resolve(__dirname, "./server/views");
const CLIENT_BUILD_DIRECTORY = path.resolve(__dirname, "./client/build");
const STATIC_BASE_PATH = "/static";

module.exports = {
  SERVER_VIEWS_DIRECTORY,
  CLIENT_BUILD_DIRECTORY,
  STATIC_BASE_PATH,
};
