import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "../types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    hot: true,
    // This works only in development mode. In production proxy must be configured through nginx or apache
    historyApiFallback: true,
  };
}
