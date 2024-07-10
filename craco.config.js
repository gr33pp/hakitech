const path = require("path");
const { addWebpackAlias } = require("customize-cra");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
