module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
  ].map(require.resolve),
  rules: {
    // аргументы стрелочных функций всегда заворачиваем в скобчки
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // можно использовать ++ и --
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',
  }
};
