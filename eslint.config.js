const uni = require('@uni-helper/eslint-config')
const unocss = require('@unocss/eslint-plugin')

module.exports = uni(
  {
    overrides: {
      uni: {
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      },
    },
  },
  unocss.configs.flat,
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'off',
      'node/prefer-global/process': 'off',
    },
  },
)
