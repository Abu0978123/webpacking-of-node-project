const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './dist/development/development.js',
      },
    //  
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
        ],
      }, 
    // 

      devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        // filename: 'index.html',
        compress: true,
        port: 9000,
      },
}