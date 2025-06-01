const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const productionMode = process.env.NODE_ENV === "production";

const config = {
  // entry: {
  //   index: "./src/index",
  //   main: "./src/main",
  //   app: "./src/app",
  // },
  entry: ["./src/index", "./src/main", "./src/app"],
  output: {
    // filename: "[name].js",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "dist/",
    clean: true,
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
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // order is important
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
    watchFiles: ["src/**/*", "index.html"],
    port: 3000,
    compress: true,
    open: false, // I don't want to open new table everytime I run ;)
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new MiniCssExtractPlugin(),
  ],
};

if (productionMode) {
  config.mode = "production";
  config.devtool = "inline-source-map"; // can be other value based on what is needed for server env.
  config.devServer.port = 8000;
  // do as needed for prod env...
}

module.exports = config;
