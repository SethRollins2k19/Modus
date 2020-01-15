const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const pathDist = path.resolve(__dirname,'dist/')
const pathSrc = path.resolve(__dirname,'src/')

const STYLE_LOADER = {
    loader: MiniCssExtractPlugin.loader,
    options: {
        hmr: process.env.NODE_ENV === 'development',
        reloadAll: true,
    },
};

module.exports = {
    entry: `${pathSrc}/index.js`,
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"]}
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    STYLE_LOADER,
                    "css-loader",
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                exclude: /(StyleAssets)/,
                options: {
                    name: './assets/img/[name].[ext]',
                },

            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                include: /(StyleAssets)/,
                options: {
                    esModule:false,
                    name: '../assets/img/[name].[ext]',
                },

            }
            // {
            //     test: /\.(git|png|jpe?g|svg)$/i,
            //     use: [
            //         'file-loader',
            //         {
            //             loader: "image-webpack-loader",
            //             options: {
            //                 bypassOnDebug: true,
            //                 disable: true,
            //             }
            //         }
            //     ]
            // }
        ]
    },
    resolve: {
        extensions: ["*",".js",".jsx"]
    },
    output: {
        path:pathDist,
        filename: "./js/bundle.js"
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        inline: true,

    },
    plugins: [
        new htmlWebpackPlugin({
            filename:`${pathDist}/index.html`,
            template: "./src/htmlTemplate.html"
        }),
        new MiniCssExtractPlugin({
            filename: "./css/[name].css",
            publicPath: './css',
            chunkFilename: "./css/[id].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};