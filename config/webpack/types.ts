import { type Configuration as WebpackConfiguration } from "webpack";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";

export type WebpackConfigurationWithDevServer = WebpackConfiguration &
  DevServerConfiguration;

export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
}

export type BuildMode = "development" | "production";

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
}
