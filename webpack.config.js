const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/, // matches .js and .jsx files
                loader: 'babel-loader', // uses babel-loader for the specified file types (no ts-loader needed)
                exclude: /node_modules/, 
            },
            {
                test: /\.css$/, // matches .css files only (i.e. not .scss, etc)
                use: ['style-loader', 'css-loader'], 
            },
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    output: {
        filename: 'bundle.js' // output bundle
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()], // used for hot reloading when developing
    devtool: 'eval-source-map', // builds high quality source maps
};