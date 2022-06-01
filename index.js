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

		// Possible Errors
		// http://eslint.org/docs/rules/#possible-errors
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true
			}
		],
		'no-promise-executor-return': 'error',
		'no-template-curly-in-string': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-negation': 'error',
		'no-unsafe-optional-chaining': 'error',
		'require-atomic-updates': 'error',

		// Best Practices
		// http://eslint.org/docs/rules/#best-practices
		'accessor-pairs': 'error',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'class-methods-use-this': 'warn',
		curly: 'error',
		'default-case': 'error',
		'default-case-last': 'error',
		'default-param-last': 'error',
		'dot-location': [
			'error',
			'property'
		],
		'grouped-accessor-pairs': 'error',
		'guard-for-in': 'error',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-div-regex': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'warn',
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
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-proto': 'error',
		'no-restricted-properties': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': 'warn',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': 'error',
		radix: 'error',
		'require-await': 'error',
		'vars-on-top': 'warn',
		'wrap-iife': 'error',
		yoda: 'error',

		// Strict Mode
		// http://eslint.org/docs/rules/#strict-mode
		strict: [
			'warn',
			'safe'
		],

		// Variables
		// http://eslint.org/docs/rules/#variables
		'no-label-var': 'error',
		'no-restricted-globals': 'error',
		'no-shadow': 'warn',

		// Stylistic Issues
		// http://eslint.org/docs/rules/#stylistic-issues
		'array-bracket-spacing': [
			'error',
			'never'
		],
		'block-spacing': 'error',
		'brace-style': [
			'error',
			'1tbs'
		],
		camelcase: 'error',
		'capitalized-comments': [
			'warn',
			'always',
			{
				ignoreConsecutiveComments: true
			}
		],
		'comma-dangle': 'error',
		'comma-spacing': [
			'error',
			{
				after: true,
				before: false
			}
		],
		'comma-style': [
			'error',
			'last'
		],
		'computed-property-spacing': [
			'error',
			'never'
		],
		'consistent-this': 'error',
		'eol-last': 'error',
		'func-call-spacing': 'error',
		'func-name-matching': 'error',
		'func-names': 'off',
		'func-style': [
			'error',
			'declaration',
			{
				allowArrowFunctions: true
			}
		],
		'id-denylist': [
			'error',
			'cb',
			'e',
			'err',
			'req',
			'res'
		],
		'id-length': [
			'error',
			{
				min: 2,
				exceptions: [
					'_',
					'$',
					'i',
					'h'
				]
			}
		],
		'id-match': 'error',
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'jsx-quotes': [
			'error',
			'prefer-double'
		],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
				mode: 'strict'
			}
		],
		'keyword-spacing': [
			'error',
			{
				after: true,
				before: true
			}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'lines-around-comment': 'error',
		'lines-between-class-members': 'error',
		'max-depth': [
			'warn',
			{
				max: 3
			}
		],
		'max-len': [
			'warn',
			{
				code: 100,
				ignoreUrls: true,
				ignoreTrailingComments: true
			}
		],
		'max-params': [
			'warn',
			{
				max: 4
			}
		],
		'max-statements-per-line': [
			'error',
			{
				max: 2
			}
		],
		'new-cap': 'error',
		'new-parens': 'error',
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-continue': 'error',
		'no-lonely-if': 'error',
		'no-mixed-operators': 'error',
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-new-object': 'error',
		'no-plusplus': 'error',
		'no-restricted-syntax': 'error',
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': [
			'error',
			{
				allowAfterThis: true,
				allowAfterSuper: true
			}
		],
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': 'error',
		'object-curly-spacing': [
			'error',
			'never'
		],
		'object-property-newline': 'error',
		'one-var': [
			'error',
			'never'
		],
		'one-var-declaration-per-line': 'error',
		'operator-assignment': 'error',
		'operator-linebreak': [
			'error',
			'after'
		],
		'padded-blocks': [
			'error',
			{
				classes: 'always'
			}
		],
		'quote-props': [
			'error',
			'as-needed'
		],
		quotes: [
			'error',
			'single',
			{
				allowTemplateLiterals: true
			}
		],
		semi: 'error',
		'semi-spacing': 'error',
		'sort-vars': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': [
			'error',
			'never'
		],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': [
			'error',
			'always'
		],
		'switch-colon-spacing': 'error',
		'template-tag-spacing': 'error',
		'unicode-bom': 'error',

		// ECMAScript 6
		// http://eslint.org/docs/rules/#ecmascript-6
		'arrow-parens': [
			'error',
			'as-needed'
		],
		'arrow-spacing': 'error',
		'generator-star-spacing': 'error',
		'no-confusing-arrow': 'error',
		'no-duplicate-imports': 'error',
		'no-restricted-imports': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'object-shorthand': 'warn',
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: true
			}
		],
		'prefer-const': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'rest-spread-spacing': 'error',
		'sort-imports': 'error',
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'yield-star-spacing': [
			'error',
			'before'
		],

		// JSDoc
		'jsdoc/check-access': 'error',
		'jsdoc/require-description-complete-sentence': 'error'
	},

	settings: {
		jsdoc: {
			mode: 'typescript'
		}
	}
};
