export default [
  {
    ignores: [
      'node_modules/**',
      'frontend/dist/**',
      'backend/dist/**',
      'shared/dist/**',
      'coverage/**',
    ],
  },
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-unreachable': 'error',
      'no-constant-condition': 'error',
      'no-debugger': 'error',
    },
  },
  {
    files: ['scripts/**/*.mjs'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
  },
];
