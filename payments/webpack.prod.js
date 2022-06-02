const HTMLWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        options: { presets: ["@babel/preset-react"] },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "payment",
      filename: "remoteEntry.js",
      exposes: {
        "./Payment": "./src/containers/Payment",
      },
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
