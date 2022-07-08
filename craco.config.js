const path = require("path");

module.exports = {
  babel: {
    presets: ["@emotion/babel-preset-css-prop"],
  },
  webpack: {
    alias: {
      $: path.resolve(__dirname, "src/"),
      $components: path.resolve(__dirname, "src/components/"),
      $atoms: path.resolve(__dirname, "src/atoms/"),
      $modules: path.resolve(__dirname, "src/modules/"),
      $organisms: path.resolve(__dirname, "src/organisms/"),
      $hooks: path.resolve(__dirname, "src/hooks/"),
      $theme: path.resolve(__dirname, "src/theme/"),
    },
  },
};
