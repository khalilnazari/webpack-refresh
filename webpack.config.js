const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const productionMode = process.env.NODE_ENV === "production";

const config = {
  entry: ["./src/index", "./src/main", "./src/app"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
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
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      // rule when image is used inside js file
      {
        test: /\.(png|jpeg|jpg|svg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][name][ext]",
        },
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
    open: false,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new MiniCssExtractPlugin(),
    // when image is used inside html file
    new CopyPlugin({
      patterns: [{ from: "./src/images", to: "images" }],
    }),
  ],
};

if (productionMode) {
  config.mode = "production";
  config.devtool = "inline-source-map"; // can be other value based on what is needed for server env.
  config.devServer.port = 8000;
  // do as needed for prod env...
}

module.exports = config;
