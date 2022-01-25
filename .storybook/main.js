module.exports = {
  stories: [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDir: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-essentials",
  ],
  framework: "@storybook/react",
};
