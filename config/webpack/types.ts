import { type Configuration as WebpackConfiguration } from "webpack";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";

export type WebpackConfigurationWithDevServer = WebpackConfiguration &
  DevServerConfiguration;

export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
}

export type BuildMode = "development" | "production";
export type BuildTarget = "mobile" | "desktop";

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyzer: boolean;
  target: BuildTarget;
}
