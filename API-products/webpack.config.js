import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { ModuleFederationPlugin } from "@module-federation/enhanced/webpack";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:3002/",
    clean: true
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]] }
      }
    }]
  },
  resolve: { extensions: [".js", ".jsx"] },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new ModuleFederationPlugin({
      name: "apiProducts",
      filename: "remoteEntry.js",
      exposes: { "./Syllabus": "./src/Syllabus.jsx" },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } }
    })
  ],
  devServer: { port: 3002, hot: true, headers: { "Access-Control-Allow-Origin": "*" } }
};
