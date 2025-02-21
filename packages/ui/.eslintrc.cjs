/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  plugins: ["@stylexjs"],
  rules: {
    "@stylexjs/valid-styles": "error",
    '@stylexjs/no-unused': "error",
    '@stylexjs/valid-shorthands': "warning",
    '@stylexjs/sort-keys': "warning"
  },
};
