import { buildDevServer } from "./build-dev-server";
import { buildLoaders } from "./build-loaders";
import { buildPlugins } from "./build-plugins";
import { buildResolvers } from "./build-resolvers";
import { BuildOptions, WebpackConfigurationWithDevServer } from "./types";

export function buildWebpack(
  options: BuildOptions,
): WebpackConfigurationWithDevServer {
  const isDevelopment = options.mode === "development";

  return {
    // Define the production mode to optimize and minimize the build
    mode: options.mode,
    entry: {
      // Define the entry point of the application
      main: options.paths.entry,
    },
    output: {
      // Define the output directory
      path: options.paths.output,
      // Define the output filename pattern based on entry point name and file content hash to avoid browser caching
      filename: "[name].[contenthash].js",
      // Clean the output directory before each build
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      // Define the loaders for different file types. Order is important.
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    // Enable source maps in development mode for easier debugging
    devtool: isDevelopment ? "inline-source-map" : "source-map",
    // Configure the development server if in development mode
    devServer: isDevelopment ? buildDevServer(options) : undefined,
  };
}
