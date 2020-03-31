const webpack = require("webpack");
const path = require("path");
const autoprefixer = require("autoprefixer");
const WebpackNotifierPlugin = require("webpack-notifier");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cwd = process.cwd();

module.exports = env => {
    var environment = env.ENV === "dev" ? "development" : "production";
    return {
        entry: {
            "dist/nads": "./lib/index.js"
        },
        output: {
            path: path.resolve(__dirname, ""),
            filename: "[name].bundle.js"
        },
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin({
                    cssProcessorPluginOptions: {
                        preset: [
                            "default",
                            { discardComments: { removeAll: true } }
                        ]
                    }
                })
            ]
        },
        plugins: [
            new WebpackNotifierPlugin({ alwaysNotify: true }),
            new webpack.DefinePlugin({
                ENV: JSON.stringify(env.ENV)
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ],
        mode: environment,
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // only enable hot in development
                                hmr: environment === "development",
                                // if hmr does not work, this is a forceful method.
                                reloadAll: true
                            }
                        },
                        { loader: "css-loader", options: { importLoaders: 1 } },
                        { loader: "postcss-loader" }
                    ]
                },
                {
                    test: /\.scss$/,

                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // only enable hot in development
                                hmr: environment === "development",
                                // if hmr does not work, this is a forceful method.
                                reloadAll: true
                            }
                        },
                        { loader: "css-loader", options: { importLoaders: 1 } },
                        {
                            loader: "postcss-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "dist",
                                publicPath: "./"
                            }
                        }
                    ]
                }
            ]
        }
    };
};
