import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { ModuleFederationPlugin } from "@module-federation/enhanced/webpack";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }]
            ]
          }
        }
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  resolve: { extensions: [".js", ".jsx"] },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        fsad: "fsad@http://localhost:3001/remoteEntry.js",
        apiProducts: "apiProducts@http://localhost:3002/remoteEntry.js"
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true }
      }
    })
  ],
  devServer: { port: 3000, hot: true }
};