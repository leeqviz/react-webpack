import { Configuration } from "webpack";
import { BuildOptions } from "./types";

export function buildResolvers(
  options: BuildOptions,
): Configuration["resolve"] {
  return {
    // Define the file extensions to resolve so imports can omit them
    extensions: [".tsx", ".ts", ".js"],
  };
}
