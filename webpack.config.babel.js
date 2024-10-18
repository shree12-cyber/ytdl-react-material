const path = require('path');

module.exports = {
  entry: {
    client: './src/client/index.jsx',
    server: './src/server/index.jsx'
  },
  output: {
    filename: '[name].js', // Generates client.js and server.js
    path: path.resolve(__dirname, 'dist'),
  },
  // Add other configurations here
};
