import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
export function buildLoaders(options) {
    var isDevelopment = options.mode === "development";
    var tsLoader = {
        // Define the loader for TypeScript (ts | tsx) files only
        test: /\.tsx?$/,
        use: [
            {
                loader: "ts-loader",
                options: {
                    transpileOnly: isDevelopment,
                    getCustomTransformers: isDevelopment
                        ? function () { return ({
                            before: [ReactRefreshTypeScript()],
                        }); }
                        : undefined,
                },
            },
        ], // used instead of babel-loader
        exclude: /node_modules/,
    };
    var babelLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    "@babel/preset-env",
                    [
                        "@babel/preset-react",
                        { runtime: isDevelopment ? "automatic" : "classic" },
                    ], // Use the new JSX transform in development for better performance and debugging, fallback to classic in production for compatibility
                    "@babel/preset-typescript",
                ],
            },
        },
    };
    var assetLoader = {
        // Define the default loader for images besides SVGs.
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
    };
    var svgAssetLoader = {
        test: /\.svg$/i,
        type: "asset",
        resourceQuery: /url/, // *.svg?url
    };
    var svgComponentLoader = {
        test: /\.svg$/i,
        resourceQuery: { not: [/url/] }, // exclude if *.svg?url
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    };
    var sassLoader = {
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
    var cssLoader = {
        test: /\.css$/i,
        use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
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
        ],
    };
    return [
        assetLoader,
        sassLoader,
        isDevelopment ? tsLoader : babelLoader,
        svgAssetLoader,
        svgComponentLoader,
        cssLoader,
    ];
}
