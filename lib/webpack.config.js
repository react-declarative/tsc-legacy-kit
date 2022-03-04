const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'production',
  output: {
    filename: 'sdk.min.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'sdk',
    libraryTarget: 'umd',
  },
  externals: {
    'react-dom': 'ReactDOM',
    'react': 'React',
  },
  resolve: {
    alias: {
      'react/jsx-runtime': path.resolve(__dirname, './src/jsx-runtime')
    },
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
    hints: false,
  }
}
