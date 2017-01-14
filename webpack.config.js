module.exports = {
  entry: {
    App1: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: "./app/temp/scripts",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/, //regex telling babel to test js files only
        exclude: /node_modules/ //dont compile node_modules folder
      }
    ]
  },
  debug: true
};