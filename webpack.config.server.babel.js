import nodeExternals from 'webpack-node-externals';
import path from 'path';



const server = {
  entry: './src/server/index.jsx',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'src'),
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
    ],
  },
};

export default server;
