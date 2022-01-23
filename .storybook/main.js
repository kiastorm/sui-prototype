const path = require("path");

module.exports = {
  stories: [
    "../packages/**/*.stories.tsx",
    "../docs/**/*.stories.mdx",
    // "./recipes/*.stories.tsx",
    // "./pages/*.stories.tsx",
    // "./snowflakes/*.stories.tsx",
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-storysource"],
  staticDirs: ["../public"],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  // we need to add aliases to webpack so it knows how to follow
  // to the source of the packages rather than the built version (dist)
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        ...convertTsConfigPathsToWebpackAliases(),
      },
    },
  }),
};

function convertTsConfigPathsToWebpackAliases() {
  const rootDir = path.resolve(__dirname, "../");
  const tsconfig = require("../tsconfig.json");
  if (
    !tsconfig ||
    !tsconfig.compilerOptions ||
    !tsconfig.compilerOptions.paths
  ) {
    return {};
  }

  const tsconfigPaths = Object.entries(tsconfig.compilerOptions.paths);

  return tsconfigPaths.reduce((aliases, [realPath, mappedPath]) => {
    aliases[realPath] = path.join(rootDir, mappedPath[0]);
    return aliases;
  }, {});
}
