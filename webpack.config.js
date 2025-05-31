const path = require("path");

const productionMode = process.env.NODE_ENV === "production";

const config = {
  entry: {
    index: "./src/index",
    main: "./src/main",
    app: "./src/app",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "dist/",
  },
  mode: "development",
  performance: {
    hints: false, // just to hide some errors
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(png|jpg)$/,
        // type: "asset/resource",
        use: "ts-loader",
      },
      {
        test: /\.(ttf)/,
        // type: "asset/resource",
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    compress: true,
    open: false, // I don't want to open new table everytime I run ;)
  },
};

if (productionMode) {
  config.mode = "production";
  config.devtool = "inline-source-map"; // can be other value based on what is needed for server env.
  config.devServer.port = 8000;
  // do as needed for prod env...
}

module.exports = config;
