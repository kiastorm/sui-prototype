/*eslint-env es6*/
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["plugin:storybook/recommended", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "storybook/default-exports": "off",
    "@typescript-eslint/no-explicit-any": "off",
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
