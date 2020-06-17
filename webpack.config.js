const HtmlPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'src/static/js'),
        // Capture name from the entry using a pattern
        filename: 'main.js',
      },
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
        new CssPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
};
