// var path = require('path');
// require('dotenv').config(); // using env variables

module.exports = () => {
  return {
    mode: 'development',

    entry: './src/server.js',
    target: 'node',
    watch: true,

    // TODO: Use webpack dev server
    // devServer: {
    //   contentBase: path.join(__dirname, 'dist'),
    //   port: process.env.PORT,
    //   compress: true,
    // },

    // Output configs
    output: {
      filename: 'bundle.js',
    },

    // Modules!
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
