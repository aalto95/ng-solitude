import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jsdoc from 'eslint-plugin-jsdoc';
import preferArrow from 'eslint-plugin-prefer-arrow';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import jasmine from 'eslint-plugin-jasmine';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: [
      '**/node_modules/',
      '**/dist/',
      '**/coverage/',
      '**/.vscode/',
      '**/.ci/',
      '**/nginx/',
      '**/tsconfig*.json',
      '**/polyfills.ts',
      '**/main.ts'
    ]
  },
  ...compat
    .extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:@angular-eslint/recommended',
      'plugin:@angular-eslint/template/process-inline-templates',
      'plugin:prettier/recommended',
      'prettier'
    )
    .map((config) => ({
      ...config,
      files: ['**/*.ts']
    })),
  {
    files: ['**/*.ts'],
    plugins: {
      '@stylistic': stylistic,
      '@typescript-eslint': typescriptEslint,
      jsdoc,
      'prefer-arrow': preferArrow,
      prettier,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      jasmine
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        project: './tsconfig.eslint.json',
        createDefaultProgram: true
      }
    },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'],
            ['^@?(?!mediu@nrwl/eslint-plugin-nxm-stories)\\w'],
            ['^@medium-stories?\\w'],
            ['^[^.]'],
            ['^\\.']
          ]
        }
      ],
      'sort-imports': 'off',
      'prettier/prettier': 'warn',
      '@angular-eslint/no-empty-lifecycle-method': 'off',
      '@angular-eslint/component-selector': 'off',
      '@angular-eslint/contextual-lifecycle': 'error',
      '@angular-eslint/directive-class-suffix': 'error',
      '@angular-eslint/component-class-suffix': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',

      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase'
        }
      ],
      '@angular-eslint/no-conflicting-lifecycle': 'error',
      '@angular-eslint/no-input-rename': 'error',
      '@angular-eslint/no-inputs-metadata-property': 'error',
      '@angular-eslint/no-output-native': 'error',
      '@angular-eslint/no-output-on-prefix': 'error',
      '@angular-eslint/no-output-rename': 'error',
      '@angular-eslint/no-outputs-metadata-property': 'error',
      '@angular-eslint/use-lifecycle-interface': 'error',
      '@angular-eslint/use-pipe-transform-interface': 'error',
      '@angular-eslint/prefer-standalone': 'off', // Компонентные библиотеки оперируют модульностью
      '@angular-eslint/directive-selector': 'off',
      '@angular-eslint/no-input-rename': 'off',
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/no-unsafe-argument': 1,
      '@typescript-eslint/no-unsafe-member-access': 1,
      '@typescript-eslint/no-unsafe-call': 1,
      '@typescript-eslint/adjacent-overload-signatures': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            Object: {
              message: 'Avoid using the `Object` type. Did you mean `object`?'
            },

            Function: {
              message:
                'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
            },

            Boolean: {
              message: 'Avoid using the `Boolean` type. Did you mean `boolean`?'
            },

            Number: {
              message: 'Avoid using the `Number` type. Did you mean `number`?'
            },

            String: {
              message: 'Avoid using the `String` type. Did you mean `string`?'
            },

            Symbol: {
              message: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
            }
          }
        }
      ],

      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-floating-promises': 'off',

      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true
          },

          singleline: {
            delimiter: 'semi',
            requireLast: false
          }
        }
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            // Private instance fields (for injectables)
            '#private-instance-field',
            'private-instance-field',
            'private-field',
            '#private-field',

            // Index signature
            'signature',
            'call-signature',

            // Fields
            'public-static-field',
            'protected-static-field',
            'private-static-field',
            '#private-static-field',

            'public-decorated-field',
            'protected-decorated-field',
            'private-decorated-field',

            'public-instance-field',
            'protected-instance-field',

            'public-abstract-field',
            'protected-abstract-field',

            'public-field',
            'protected-field',

            'static-field',
            'instance-field',
            'abstract-field',

            'decorated-field',

            'field',

            // Static initialization
            'static-initialization',

            // Constructors
            'public-constructor',
            'protected-constructor',
            'private-constructor',

            'constructor',

            // Methods
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            '#private-static-method',

            'public-decorated-method',
            'protected-decorated-method',
            'private-decorated-method',

            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
            '#private-instance-method',

            'public-abstract-method',
            'protected-abstract-method',

            'public-method',
            'protected-method',
            '#private-method',

            'static-method',
            'instance-method',
            'abstract-method',

            'decorated-method',

            'method'
          ]
        }
      ],
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': [
        'error',
        {
          ignoreParameters: true
        }
      ],

      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-parameter-properties': 'off',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/quotes': 'off',
      '@stylistic/semi': ['error', 'always'],

      '@typescript-eslint/triple-slash-reference': [
        'error',
        {
          path: 'always',
          types: 'prefer-import',
          lib: 'always'
        }
      ],

      '@stylistic/type-annotation-spacing': 'error',
      '@typescript-eslint/unified-signatures': 'error',
      '@typescript-eslint/unbound-method': 'off',
      'arrow-body-style': 'error',
      complexity: 'off',
      'constructor-super': 'error',
      curly: 'error',
      'eol-last': 'error',
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'error',

      'id-blacklist': [
        'error',
        'any',
        'Number',
        'String',
        'string',
        'Boolean',
        'boolean',
        'Undefined',
        'undefined'
      ],

      'id-match': 'error',
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-indentation': 'error',
      'jsdoc/no-types': 'error',
      'max-classes-per-file': 'off',

      'max-len': [
        'error',
        {
          code: 150
        }
      ],

      'new-parens': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-cond-assign': 'error',

      'no-console': [
        'error',
        {
          allow: [
            'log',
            'warn',
            'dir',
            'timeLog',
            'assert',
            'clear',
            'count',
            'countReset',
            'group',
            'groupEnd',
            'table',
            'dirxml',
            'error',
            'groupCollapsed',
            'Console',
            'profile',
            'profileEnd',
            'timeStamp',
            'context'
          ]
        }
      ],

      'no-debugger': 'error',
      'no-empty': 'off',
      'no-eval': 'error',
      'no-fallthrough': 'error',
      'no-invalid-this': 'off',
      'no-new-wrappers': 'error',
      'no-restricted-imports': ['error', 'rxjs/Rx'],
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-undef-init': 'error',
      'no-underscore-dangle': 'off',
      'no-unsafe-finally': 'error',
      'no-unused-labels': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'prefer-arrow/prefer-arrow-functions': 'off',
      'prefer-const': 'error',
      'quote-props': ['error', 'as-needed'],
      radix: 'off',

      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          asyncArrow: 'always',
          named: 'never'
        }
      ],

      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/']
        }
      ],

      'use-isnan': 'error',
      'valid-typeof': 'off'
    }
  },
  ...compat
    .extends('plugin:@angular-eslint/template/recommended')
    .map((config) => ({
      ...config,
      files: ['**/*.component.html']
    })),
  ...compat
    .extends('plugin:@angular-eslint/template/process-inline-templates')
    .map((config) => ({
      ...config,
      files: ['**/*.component.ts']
    }))
];
