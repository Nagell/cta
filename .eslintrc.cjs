module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es2022': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        '@vue/typescript/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 2022
    },

    'settings': {
        'import/resolver': {
            'node': {
                'extensions': ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    'ignorePatterns': ['**/node_modules/*', '**/dist/*'],
    'rules': {
        /* RUNNING */
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        /* GENERAL */
        'indent': ['error', 4, { 'ignoredNodes': ['TemplateLiteral *'] }],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'max-len': ['warn',
            {
                'code': 120,
                'tabWidth': 4,
                'comments': 120,
                'ignorePattern': '',
                'ignoreComments': false,
                'ignoreTrailingComments': false,
                'ignoreUrls': true,
                'ignoreStrings': true,
                'ignoreTemplateLiterals': true,
                'ignoreRegExpLiterals': true
            }
        ],


        /* JS */
        'operator-linebreak': [2, 'before'], // for easier to read operator breaks
        'no-useless-escape': 'off',

        /* TW */
        '@typescript-eslint/no-var-requires': 0, // to deal with require in tailwind.config.js

        /* VUE */
        'camelcase': 'off',
        'vue/no-v-html': 'off', // sometimes v-html is needed
        'vue/no-unused-components': ['warn', {
            'ignoreWhenBindingPresent': true
        }],
        'vue/no-unused-vars': ['warn'],
        'vue/max-attributes-per-line': ['warn', {
            'singleline': {
                'max': 3
            },
            'multiline': {
                'max': 1
            }
        }],
        'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
        'vue/max-len': ['warn', {
            'code': 120,
            'template': 120,
            'tabWidth': 2,
            'comments': 120,
            'ignorePattern': '',
            'ignoreComments': false,
            'ignoreTrailingComments': false,
            'ignoreUrls': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
            'ignoreRegExpLiterals': true,
            'ignoreHTMLAttributeValues': false,
            'ignoreHTMLTextContents': false,
        }]
    },
    'overrides': [
        {
            'files': ['*.vue'],
            'rules': {
                'indent': 'off',
                'max-len': 'off'
            }
        }
    ],
    /* PROJECT SPECIFIC */
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
    },
}
