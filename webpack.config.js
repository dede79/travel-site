module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: "./app/temp/scripts",
    filename: "App-output.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets:['es2015']
        },
        test: /\.js$/, //regex to tell babel to convert only js files
        exclude: /node_modules/  //exclude node_modules folder
      
      }
    ]
  }
}