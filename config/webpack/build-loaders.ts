import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDevelopment = options.mode === "development";

  const tsLoader = {
    // Define the loader for TypeScript (ts | tsx) files only
    test: /\.tsx?$/,
    use: "ts-loader", // used instead of babel-loader
    exclude: /node_modules/,
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    // Loaders are applied from last to first
    use: [
      // Creates `style` nodes from JS strings in development, extracts CSS into separate files in production
      isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS with enabled default export for CSS modules
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false, // in v6 disabled by default
            localIdentName: isDevelopment
              ? "[path][name]__[local]"
              : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [sassLoader, tsLoader];
}
