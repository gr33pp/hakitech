const path = require("path");
const { addWebpackAlias } = require("customize-cra");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      // Enable Babel Loader Caching
      webpackConfig.module.rules[1].oneOf.forEach((rule) => {
        if (rule.loader && rule.loader.includes("babel-loader")) {
          rule.options.cacheDirectory = true;
        }
      });

      // Add TerserPlugin with parallelization
      if (webpackConfig.optimization && webpackConfig.optimization.minimizer) {
        webpackConfig.optimization.minimizer.push(
          new TerserPlugin({
            parallel: true,
          })
        );
      }

      // Disable Source Maps for development
      if (process.env.NODE_ENV === "development") {
        webpackConfig.devtool = false;
      }

      return webpackConfig;
    },
  },
};
