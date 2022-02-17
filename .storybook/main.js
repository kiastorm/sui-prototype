module.exports = {
  stories: [
    "../design-system/**/*.stories.mdx",
    "../design-system/**/*.stories.@(js|jsx|ts|tsx)",
    "../design-system/**/*.story.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-essentials",
  ],
  framework: "@storybook/react",
};
