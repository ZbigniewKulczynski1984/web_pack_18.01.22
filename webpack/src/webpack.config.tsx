const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    distPath: path.join(__dirname, 'dist'),
    srcPath: path.join(__dirname, 'src')
};

function srcPathExtend(subpath) {
  return path.join(config.srcPath, subpath)
}

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: config.distPath,
        filename: 'index_bundle.js',
        sourceMapFilename: 'index_bundle.map'
    },
	
    },
    plugins: [
        new CleanWebpackPlugin([config.distPath], {verbose: true}),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ];