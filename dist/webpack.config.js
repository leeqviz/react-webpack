import path from "path";
import { buildWebpack } from "./config/webpack/build-webpack";
export default (function (env) {
    return buildWebpack({
        port: env.port || 3000,
        mode: env.mode || "production",
        analyzer: env.analyzer || false,
        target: env.target || "desktop",
        paths: {
            src: path.resolve(__dirname, "src"),
            entry: path.resolve(__dirname, "src", "index.tsx"),
            html: path.resolve(__dirname, "public", "index.html"),
            output: path.resolve(__dirname, "build"),
        },
    });
});
