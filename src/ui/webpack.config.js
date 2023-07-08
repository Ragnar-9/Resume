const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: {
        index: './src/ui/index.ts',
    },
    stats: 'errors-only',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            async_hooks: false,
            fs: false,
            net: false
        }
    },
    plugins: [
        new NodePolyfillPlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'src/ui/components/**/*.css', to: 'css/[name].css' },
                { from: 'src/ui/assets/fontawesome-free-5.14.0-web/**/*', to: 'css/[name][ext]' },
            ]
        }),
        new HtmlWebpackPlugin({
            title: 'Jayant Resume',
            template: 'src/ui/index.html',
            cssTest: "src/ui/assets/resume.css",
            files: {
                css: ['src/ui/assets/fontawesome-free-5.14.0-web/css/all.css',
                    'src/ui/assets/resume.css'],
                favicon: ""
            }
        }),
        new MiniCssExtractPlugin({
            filename: "src/ui/assets/resume.css"
        })

    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../../build'),
    },
};