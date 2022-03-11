const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  
   output: {
     path: path.resolve(__dirname, 'build'),
     filename: 'bundle.js',
   },
   resolve: {
     modules: [path.join(__dirname, 'src'), 'node_modules'],
     alias: {
       react: path.join(__dirname, 'node_modules', 'react'),
     },
   },
   module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader',
         },
       },
       {
         test: /\.css$/,
         use: [
           {
             loader: 'style-loader',
           },
           {
             loader: 'css-loader',
           },
         ],
       },
       {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
     ],
   },
   plugins: [
     new HtmlWebPackPlugin({
       template: './src/index.html',
     }),
   ],
 };