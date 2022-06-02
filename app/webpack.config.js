const HTMLWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    historyApiFallback: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: { presets: ["@babel/preset-react"] },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app",
      filename: "remoteEntry.js",
      remotes: {
        payment: "payment@http://localhost:3005/remoteEntry.js",
      },
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
