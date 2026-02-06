import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, ProgressPlugin } from "webpack";
import { BuildOptions } from "./types";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const isDevelopment = options.mode === "development";
  const isProduction = options.mode === "production";

  // Define the HTML template to generate the final HTML file and inject the bundled JavaScript
  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
  ];

  if (isProduction) {
    plugins.push(
      new MiniCssExtractPlugin({
        // Define the output filename pattern for extracted CSS files
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
    );
  }

  if (isDevelopment) {
    // Add a progress plugin to show build progress in development mode
    plugins.push(new ProgressPlugin());
  }

  return plugins;
}
