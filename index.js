module.exports = {
  extends: [
    './rules/base',
    './rules/react',
    './rules/react_formatting',
  ].map(require.resolve),
  rules: {}
};
