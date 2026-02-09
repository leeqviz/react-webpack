import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { DefinePlugin, ProgressPlugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
export function buildPlugins(options) {
    var isDevelopment = options.mode === "development";
    var isProduction = options.mode === "production";
    var plugins = [
        // Define the HTML template to generate the final HTML file and inject the bundled JavaScript
        new HtmlWebpackPlugin({
            template: options.paths.html,
        }),
        // Define global constants to be used in the application code based on the build target
        new DefinePlugin({
            __MODE__: JSON.stringify(options.mode),
            __TARGET__: JSON.stringify(options.target),
        }),
    ];
    if (isProduction) {
        plugins.push(new MiniCssExtractPlugin({
            // Define the output filename pattern for extracted CSS files
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }));
        if (options.analyzer) {
            plugins.push(new BundleAnalyzerPlugin());
        }
    }
    if (isDevelopment) {
        // Add a progress plugin to show build progress in development mode
        plugins.push(new ProgressPlugin());
    }
    return plugins;
}
