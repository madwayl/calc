const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/scripts/script.js',
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
            favicon: './src/image/logo.png'
        })
    ],
    devtool: 'source-map',
    devServer: {
        static: './dist',
    },
    optimization: {
        splitChunks: { chunks: "all" },
    },
}