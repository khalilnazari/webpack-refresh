const path = require('path')

module.exports = {
    // minimal configuration
    entry: './src/index.js', 
    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none'
}