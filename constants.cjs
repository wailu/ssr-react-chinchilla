const path = require("path");

const CLIENT_BUILD_DIRECTORY = path.resolve(__dirname, "./client/build");
const STATIC_BASE_PATH = "static/";

module.exports = {
  CLIENT_BUILD_DIRECTORY,
  STATIC_BASE_PATH,
};
