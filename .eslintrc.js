module.exports = {
	env: {
		browser: true,
	},
	extends: [
		'standard',
		'plugin:prettier/recommended',
		'plugin:vue/essential',
	],
	parserOptions: {
		ecmaVersion: 12,
		parser: 'babel-eslint',
		sourceType: 'module',
	},
	plugins: ['vue', 'prettier'],
	rules: {
		'prettier/prettier': 'error',

		'generator-star-spacing': 'off',
		'arrow-parens': 'off',
		'one-var': 'off',

		'import/first': 'off',
		'import/named': 'error',
		'import/namespace': 'error',
		'import/default': 'error',
		'import/export': 'error',
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'import/no-extraneous-dependencies': 'off',
		'prefer-promise-reject-errors': 'off',
	},
}
