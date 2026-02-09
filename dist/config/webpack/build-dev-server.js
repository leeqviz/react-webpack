export function buildDevServer(options) {
    return {
        port: options.port,
        open: true,
        hot: true,
        // This works only in development mode. In production proxy must be configured through nginx or apache
        historyApiFallback: true,
    };
}
