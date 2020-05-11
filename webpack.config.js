const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");
const Dotenv = require("dotenv-webpack");

// const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    server: ["@babel/polyfill", "./api/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "[name].js",
  },
  target: "node",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_nodules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html/,
        loader: "html-loader",
      },
    ],
  },
  externals: [nodeExternals()],
  plugins: [
    // new NodemonPlugin(),
    // new htmlWebpackPlugin({
    //   template: "./index.html"
    // })
    new Dotenv(),
  ],
};
