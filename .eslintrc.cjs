// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true
//   },
//   extends: 'standard',
//   overrides: [
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module'
//   },
//   rules: {
//   }
// }
module.exports = {
	// ...
	extends: ['standard', 'plugin:astro/recommended'],
	rules: {
		'no-tabs': 'off',
		indent: 'off',
		'space-before-function-paren': 'off'
	},
	// ...
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			rules: {}
		}
	]
}
