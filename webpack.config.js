const path = require('path');
const outputDir = path.resolve(__dirname, 'dist/js/');
module.exports = {
    devtool: 'eval-source-map',
    entry: {main: path.resolve(__dirname, 'src/js/main.js'),
    localstorage: path.resolve(__dirname, 'src/js/localstorage.js')},
    mode: 'production',
    output: {
        path: outputDir,
        filename: '[name].js'
    }
};