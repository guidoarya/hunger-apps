module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jasmine": true,
    'codeceptjs/codeceptjs': true,
  },
  extends: [
    'airbnb-base',
    "plugin:codeceptjs/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-underscore-dangle': 0,
    'no-console': 0,
    'no-restricted-globals': 0,
    'import/extensions': 0,
    'no-extra-semi': 0,
    'linebreak-style': 0,
    'no-undef': 0,
    'consistent-return': 0,
    'no-prototype-builtins': 0,
    'import/prefer-default-export': 0,
    'no-return-assign': 0,
    'no-unused-vars': 0,
    'max-len': 0,
    'class-methods-use-this': 0,
    "no-new": 0,
    "no-plusplus": 0,
    "no-await-in-loop": 0,
  },
  "plugins": ["jasmine", "codeceptjs"]
};