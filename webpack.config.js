const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js',
    },
    watch: true,
    devtool: false,
    module: {
        rules: [
            // udah gak dipake
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader'],
            // },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS Strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles SASS to CSS
                    'sass-loader',
                ],
            },
        ],
    },
};