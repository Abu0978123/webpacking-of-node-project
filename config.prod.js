const path = require('path');
module.exports = {
    mode: 'production',
    entry: {
      'javascript': "./src/text.js",
      'javascript': "./src/index.js",
      // contact: './contact.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'production.js',
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