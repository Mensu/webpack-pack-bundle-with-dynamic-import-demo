var path = require("path");
module.exports = {
	mode: "development",
	entry: "./index",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "index.js",
  },
  devtool: 'inline-cheap-module-source-map',
};