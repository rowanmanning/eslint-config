'use strict';

// Export ESLint config
module.exports = {

	// Parser config
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		babelOptions: {
			presets: [
				'@babel/preset-react'
			]
		}
	},

	// Overrides to check JSX files
	overrides: [
		{
			files: ['*.js', '*.jsx']
		}
	],

	// Plugins
	plugins: [
		'react'
	],

	// React plugin settings
	settings: {
		react: {
			pragma: 'h',
			version: '16.0'
		}
	},

	// The lint rules
	rules: {
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/require-render-return': 'error'
	}
};
