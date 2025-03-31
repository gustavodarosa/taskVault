import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules', 'dist'], // Ignore unnecessary folders
  },
  {
    files: ['**/*.ts'], // Apply rules to TypeScript files
    languageOptions: {
      ecmaVersion: 2021, // Support for ES2021
      sourceType: 'module',
      parser: tsParser, // Use TypeScript parser
    },
    plugins: {
      '@typescript-eslint': tsPlugin, // Use TypeScript plugin as an object
    },
    rules: {
      semi: ['error', 'always'], // Enforce semicolons
      quotes: ['error', 'double'], // Enforce double quotes
      "no-duplicate-imports": "error",
      '@typescript-eslint/no-unused-vars': ['error'], // Example TypeScript-specific rule
    },
  },
];