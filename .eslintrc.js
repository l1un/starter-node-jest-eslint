module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  plugins: [
    'jest'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': [
    'error', {
      'argsIgnorePattern': '^next$',
    }
  ],
    'no-underscore-dangle': [
      'error', {
        'allow': ['_id']
      }
    ],
    'no-console': 0
  },
};
