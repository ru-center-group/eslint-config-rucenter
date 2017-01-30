/**
 * Правила для работы с чистым JS,
 * вне зависимости от используемых фреймворков
 * или сахара вроде JSX.
 */
module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
  ].map(require.resolve),
  // дополнения/переопределения правил от airbnb
  rules: {
    // аргументы стрелочных функций всегда заворачиваем в скобчки
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // запрет на переопределение аргументов функций.
    // можно изменять поля передаваемых объектов
    'no-param-reassign': ['error', { 'props': false }],

    // можно использовать ++ и --
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // экранирование символов в строках
    'no-useless-escape': 'warning',

    // кавычки вокруг полей внутри объектных литералов
    'quote-props': ['error', 'as-needed'],

    // максимальная длина строки
    'max-len': 'off',
  }
};
