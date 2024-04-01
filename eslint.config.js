// eslint.config.js
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import js from '@eslint/js';
import markdown from 'eslint-plugin-markdown';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  js.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        // myCustomGlobal: "readonly"
      },
    },
  },
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      // 'import/no-unresolved': 'off',
      'no-useless-escape': 'off',
    },
  },
  eslintConfigPrettier,
  {
    plugins: {
      markdown,
    },
  },

  {
    files: ['src/**/*.md'],
    processor: 'markdown/markdown',
    rules: {
      // ...
    },
  },
  {
    // 1. Target ```js code blocks in .md files.
    files: ['**/*.md/*.js'],
    rules: {
      // 2. Disable other rules.
      // 'no-console': 'off',
      // 'import/no-unresolved': 'off',
    },
  },
];
