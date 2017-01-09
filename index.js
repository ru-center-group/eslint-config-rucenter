module.exports = {
  parser: "babel-eslint",
  extends: [
    './rules/base',
    './rules/react',
    './rules/react_formatting',
  ].map(require.resolve),
  rules: {
    "strict": 0
  }
};
