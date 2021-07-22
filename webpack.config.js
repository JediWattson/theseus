const path = require('path');

module.exports = {
  entry: './ship/homer/index.js',
  output: {
    path: path.resolve(__dirname, 'public/homer'),
    filename: 'index.js',
    library: "theseus_homer",
  },
}
