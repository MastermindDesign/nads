const webpack = require("webpack");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const pkg = require("./package.json");
const path = require("path");

const libraryName = pkg.name;

module.exports = {
    entry: path.join(__dirname, "./lib/index.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "nads-react.js",
        library: libraryName,
        libraryTarget: "umd",
        publicPath: "/dist/",
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                include: path.resolve(__dirname, "lib"),
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 100000
                }
            }
        ]
    }
};
