const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: "./frontend/src/index.js",
    output:{
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "backend/public")
    },
    mode: "production",
    plugins:[
        new htmlWebpackPlugin({
            template: "./frontend/index.html",
            minify: {
                collapseWhitespace:true,
                removeComments:true
            }
        }),
        new MiniCssExtractPlugin({
            filename:"css/style.css",
            chunkFilename: "bootstrap.min.css"
        })
    ],
    devServer:{
        contentBase: path.join(__dirname, "backend/public"),
        compress:true,
        port:4000
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        publicPath: '/backend/public/css/',
                      },
                    },
                    'css-loader',
                  ]
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                    
                }
            }
        ]
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}