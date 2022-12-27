const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
    clean: true,
    assetModuleFilename: "imgs/[name][ext]",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    hot: true,
    port: 4000,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.gif$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new MiniCssExtractPlugin({ filename: "css/style.css" }),
  ],
};
