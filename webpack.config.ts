import path from 'path';
import type { Configuration } from 'webpack';

interface WebpackArgs {
  mode?: 'production' | 'development';
}

const config = (env: object, args: WebpackArgs): Configuration => ({
  target: 'node',
  entry: './src/index.ts',
  mode: args.mode || 'development',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules|dist/,
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
});

export default config;
