const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  root: true,

  modules: {
    auto: true,
    esm: true,
    typescript: {
      parserProject: ['./tsconfig.eslint.json'],
      resolverProject: ['./tsconfig.json'],
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'always',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never', json: 'always' },
    ],
  },
  overrides: [
    {
      files: ['*.test.tsx', '*.test.ts', '*.spec.tsx', '*.spec.ts'],
      rules: {
        'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
  ],
});
