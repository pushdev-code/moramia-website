const HtmlPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new CssPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 5000,
    overlay: true
  }
};
