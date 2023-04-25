'use strict';

// Export ESLint config
module.exports = {

	// Environment
	env: {
		es2020: true,
		browser: true,
		node: true,
		mocha: true
	},

	// Parser config
	parser: '@babel/eslint-parser',
	parserOptions: {
		requireConfigFile: false,
		sourceType: 'script'
	},

	// Ignore patterns
	ignorePatterns: [
		'.nyc_output',
		'coverage'
	],

	// Plugins
	plugins: [
		'jsdoc'
	],

	// The lint rules
	extends: [
		'eslint:recommended',
		"plugin:jsdoc/recommended"
	],
	rules: {

		// Possible problems
		// https://eslint.org/docs/rules/#possible-problems
		'array-callback-return': 'error',
		'no-duplicate-imports': 'error',
		'no-promise-executor-return': 'error',
		'no-self-compare': 'error',
		'no-template-curly-in-string': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-negation': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-unused-private-class-members': 'warn',
		'require-atomic-updates': 'error',

		// Suggestions
		// https://eslint.org/docs/rules/#suggestions
		'accessor-pairs': 'error',
		'block-scoped-var': 'error',
		'camelcase': 'error',
		'capitalized-comments': ['warn', 'always', {ignoreConsecutiveComments: true}],
		'class-methods-use-this': 'warn',
		'consistent-this': 'error',
		'curly': 'error',
		'default-case-last': 'error',
		'default-case': 'error',
		'default-param-last': 'error',
		'dot-location': ['error', 'property'],
		'eqeqeq': 'error',
		'func-name-matching': 'error',
		'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
		'grouped-accessor-pairs': 'error',
		'guard-for-in': 'error',
		'id-denylist': ['error', 'cb', 'e', 'err', 'req', 'res'],
		'id-length': ['error', {min: 2, exceptions: ['_', '$', 'i', 'h']}],
		'id-match': 'error',
		'max-depth': ['warn', {max: 3}],
		'max-params': ['warn', {max: 4}],
		'max-statements-per-line': ['error', {max: 2}],
		'new-cap': 'error',
		'no-alert': 'error',
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-confusing-arrow': 'error',
		'no-continue': 'error',
		'no-div-regex': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'warn',
		'no-empty': ['error', {allowEmptyCatch: true}],
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-floating-decimal': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-invalid-this': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-mixed-operators': 'error',
		'no-multi-str': 'error',
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-wrappers': 'error',
		'no-new': 'error',
		'no-plusplus': 'error',
		'no-proto': 'error',
		'no-restricted-exports': 'error',
		'no-restricted-globals': 'error',
		'no-restricted-imports': 'error',
		'no-restricted-properties': 'error',
		'no-restricted-syntax': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-sequences': 'error',
		'no-shadow': 'warn',
		'no-throw-literal': 'error',
		'no-underscore-dangle': ['error', {allowAfterThis: true, allowAfterSuper: true}],
		'no-unneeded-ternary': 'error',
		'no-unused-expressions': 'error',
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-warning-comments': 'warn',
		'object-shorthand': 'warn',
		'one-var-declaration-per-line': 'error',
		'one-var': ['error', 'never'],
		'operator-assignment': 'error',
		'prefer-arrow-callback': ['error', {allowNamedFunctions: true}],
		'prefer-const': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quote-props': ['error', 'consistent-as-needed'],
		'radix': 'error',
		'require-await': 'error',
		'rest-spread-spacing': 'error',
		'sort-imports': 'error',
		'sort-vars': 'error',
		'spaced-comment': ['error', 'always'],
		'strict': ['warn', 'safe'],
		'symbol-description': 'error',
		'vars-on-top': 'warn',
		'yoda': 'error',

		// Layout & Formatting
		// https://eslint.org/docs/rules/#layout-formatting
		'array-bracket-spacing': ['error', 'never'],
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': 'error',
		'block-spacing': 'error',
		'brace-style': ['error', '1tbs'],
		'comma-dangle': 'error',
		'comma-spacing': ['error', {after: true, before: false}],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'eol-last': 'error',
		'func-call-spacing': 'error',
		'generator-star-spacing': 'error',
		'indent': ['error', 'tab', {SwitchCase: 1}],
		'jsx-quotes': ['error', 'prefer-double'],
		'key-spacing': ['error', {beforeColon: false, afterColon: true, mode: 'strict'}],
		'keyword-spacing': ['error', {after: true, before: true}],
		'linebreak-style': ['error', 'unix'],
		'lines-around-comment': 'error',
		'lines-between-class-members': 'error',
		'max-len': ['warn', {code: 100, ignoreUrls: true, ignoreTrailingComments: true}],
		'new-parens': 'error',
		'no-multi-spaces': 'error',
		'no-multiple-empty-lines': 'error',
		'no-trailing-spaces': 'error',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': 'error',
		'object-curly-spacing': ['error', 'never'],
		'object-property-newline': 'error',
		'operator-linebreak': ['error', 'after'],
		'padded-blocks': ['error', {classes: 'always'}],
		'quotes': ['error', 'single', {allowTemplateLiterals: true}],
		'semi-spacing': 'error',
		'semi': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', {anonymous: 'never', named: 'never', asyncArrow: 'always'}],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'switch-colon-spacing': 'error',
		'template-curly-spacing': 'error',
		'template-tag-spacing': 'error',
		'unicode-bom': 'error',
		'wrap-iife': 'error',
		'yield-star-spacing': ['error', 'before'],

		// JSDoc
		// https://github.com/gajus/eslint-plugin-jsdoc#readme
		'jsdoc/check-access': 'error',
		'jsdoc/require-description-complete-sentence': 'error',
		"jsdoc/tag-lines": ["warn", "any", { "startLines": 1 }]

	},

	settings: {
		jsdoc: {
			mode: 'typescript'
		}
	}
};
