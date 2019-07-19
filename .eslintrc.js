module.exports = {
  root: true,
  parser: 'vue-eslint-parser',

  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true
  },

  parserOptions: {
    sourceType: 'module'
  },

  plugins: ['html'],

  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  rules: {
    semi: ['error', 'always'],
    indent: ['warn', 2],
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'any',
        math: 'any'
      }
    ],
    'vue/html-closing-bracket-newline': [
      'warn',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-indent': [
      'warn',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
};
