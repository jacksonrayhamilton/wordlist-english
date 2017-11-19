// Configured for ESLint 4.11.0

'use strict';

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    // Possible Errors

    'for-direction': ['error'],
    'no-compare-neg-zero': ['error'],
    'no-cond-assign': ['error', 'always'],
    'no-console': ['error'],
    'no-constant-condition': ['error'],
    'no-debugger': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-empty': ['error'],
    'no-empty-character-class': ['error'],
    'no-inner-declarations': ['error'],
    'no-invalid-regexp': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-obj-calls': ['error'],
    'no-prototype-builtins': ['error'],
    'no-regex-spaces': ['error'],
    'no-sparse-arrays': ['error'],
    'no-unexpected-multiline': ['error'],
    'no-unreachable': ['error'],
    'no-unsafe-finally': ['error'],
    'no-unsafe-negation': ['error'],
    'use-isnan': ['error'],
    'valid-typeof': ['error'],

    // Best Practices

    'accessor-pairs': ['error'],
    'array-callback-return': ['error'],
    'curly': ['error', 'multi-line'],
    'eqeqeq': ['error'],
    'no-alert': ['error'],
    'no-caller': ['error'],
    'no-div-regex': ['error'],
    'no-empty-function': ['error'],
    'no-empty-pattern': ['error'],
    'no-eval': ['error'],
    'no-extend-native': ['error'],
    'no-global-assign': ['error'],
    'no-implicit-globals': ['error'],
    'no-implied-eval': ['error'],
    'no-iterator': ['error'],
    'no-loop-func': ['error'],
    'no-multi-str': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-wrappers': ['error'],
    'no-octal': ['error'],
    'no-octal-escape': ['error'],
    'no-proto': ['error'],
    'no-redeclare': ['error', {'builtinGlobals': true}],
    'no-return-assign': ['error', 'always'],
    'no-script-url': ['error'],
    'no-self-assign': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-unused-expressions': ['error'],
    'no-unused-labels': ['error'],
    'no-with': ['error'],
    'radix': ['error'],
    'require-await': ['error'],

    // Strict Mode

    'strict': ['error', 'safe'],

    // Variables

    'no-delete-var': ['error'],
    'no-shadow': ['error', {'builtinGlobals': true}],
    'no-shadow-restricted-names': ['error'],
    'no-undef': ['error'],
    'no-unused-vars': ['error'],
    'no-use-before-define': ['error', {'functions': false}],

    // Stylistic Issues

    'max-statements-per-line': ['error'],
    'semi': ['error'],
  },
};
