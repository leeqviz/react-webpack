import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildLoaders(options) {
    var isDevelopment = options.mode === "development";
    var tsLoader = {
        // Define the loader for TypeScript (ts | tsx) files only
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader", options: { transpileOnly: isDevelopment } }], // used instead of babel-loader
        exclude: /node_modules/,
    };
    var assetLoader = {
        // Define the default loader for images besides SVGs.
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
    };
    var svgLoader = {
        test: /\.svg$/i,
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
    return [assetLoader, sassLoader, tsLoader, svgLoader, cssLoader];
}
