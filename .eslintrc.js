module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    node: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: '14',
            },
          },
        ],
      ],
    },
  },
  rules: {
    'global-require': 0,
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
  },
};
