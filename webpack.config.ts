import path from "path";
import { buildWebpack } from "./config/webpack/build-webpack";

interface EnvVariables {
  mode: "development" | "production" | undefined;
  port: number | undefined;
}

export default (env: EnvVariables) => {
  return buildWebpack({
    port: env.port || 3000,
    mode: env.mode || "production",
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", "index.html"),
    },
  });
};
