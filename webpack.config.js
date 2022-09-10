// webpack.config.js
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx", // точка входа, о которой говорилось ранее.
  mode: "development",
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/, // сопоставляет файлы .js, .ts, и .tsx
        loader: "babel-loader", // использует для указанных типов файлов загрузчик babel-loader (ts-loader не требуется).
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/env",
            "@babel/preset-typescript",
            "@babel/preset-react",
          ],
        },
      },
      {
        test: /\.css$/, // сопоставляет только файлы .css (т.е. не .scss и др.)
        use: ["style-loader", "css-loader", "react-hot-loader/webpack"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    /* alias: {
      'react-dom': '@hot-loader/react-dom'
    }, */
  },
  output: {
    filename: "bundle.js", // выходной бандл
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
    },
    //contentBase: path.join(__dirname, "public/"),
    port: 3000,
    //publicPath: '/dist/',
    hot: "only",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()], // used for hot reloading when developing
  devtool: "eval-source-map", // создает высококачественные карты кода
};
