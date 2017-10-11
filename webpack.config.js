var config = {
   entry: './index.js',

   output: {
      path:'/',
      filename: 'bundle.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.css$/,
            use: [
              'to-string-loader',
              'css-loader'
            ]
         }
      ]
   }
}

module.exports = config;
