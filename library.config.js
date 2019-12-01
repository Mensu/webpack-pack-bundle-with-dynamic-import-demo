var path = require("path");
module.exports = {
	mode: "development",
	entry: "./library",
	output: {
		path: path.join(__dirname, "library-dist"),
		filename: "library.js",
		libraryTarget: 'umd',
  },
  devtool: 'inline-cheap-module-source-map',
};