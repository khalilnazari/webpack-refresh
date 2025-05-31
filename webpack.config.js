const path = require("path");

module.exports = {
  // minimal configuration
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist/",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.(ttf)/,
        type: "asset/resource",
      },
    ],
  },
};
