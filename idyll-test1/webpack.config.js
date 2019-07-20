var path = require('path');

module.exports = {
    // Change to your "entry-point".
    entry: '/components',
    output: {
        path: path.resolve(__dirname, 'components'),
        filename: 'demo-simple.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    }
};