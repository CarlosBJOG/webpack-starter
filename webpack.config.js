const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtract= require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {

    mode: 'development',

    //para limpiar a la hora de crear el dist
    output: {
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false,
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader']

            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi webPack App',
            template: './src/index.html',//es el archivo del cual queremos jalar y crear 
            // filename: './index.html', //nombre del archivo final
        }),
        new MiniCssExtract ({
            filename: '[name].css', //'styles.[fullhash].css',
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
               { from:'src/assets/', to:'assets/'}
            ]
        })
    ],
    devtool: 'eval-source-map',


}


