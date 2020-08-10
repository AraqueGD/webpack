const path = require("path");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "./src/js/home.js"),
    money: path.resolve(__dirname, "./src/js/money.js"),
    tasks: path.resolve(__dirname, "./src/js/tasks.js"),
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
};
