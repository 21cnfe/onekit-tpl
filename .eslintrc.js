module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	'extends': [
		'plugin:vue/essential',
		// 'eslint:recommended',
		'plugin:vue/recommended',
		"plugin:vue/strongly-recommended"
	],
	plugins: [
        'vue'
    ],
	"rules": {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'indent': 'off',
		//  缩进必须为两个空格
		'vue/script-indent': [
			'error',
			2
		],
		"vue/html-indent": ["error", 2, {
			"attribute": 1,
			"baseIndent": 1,
			"closeBracket": 0,
			"alignAttributesVertically": false,
			"ignores": []
		}],
		// 如果指令或作用域属性遮盖了父作用域中的变量，则应报告v-for指令或作用域属性的变量定义。
		// 关闭不必要提示 https://eslint.vuejs.org/rules/no-v-html.html
		'vue/no-template-shadow': 'off',
		// 单行属性
		'vue/max-attributes-per-line': 'off',
		// 关闭vue中的双引号报错
		'vue/html-quotes': 'off',
		// 关闭vue中prop必须使用连字符连接
		'vue/attribute-hyphenation': 'off',
		// 强制声明的顺序
		'vue/order-in-components': 'off',
		// 强制属性顺序
		'vue/attributes-order': 'off',
		// 此规则在单行元素的内容之前和之后强制换行。
		'vue/singleline-html-element-content-newline': 'off',
		// 此规则旨在将自动闭合符号强制为已配置的样式。
		'vue/html-self-closing': 'off',
		// 结束关闭
		// @fixable 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
		'block-spacing': [
			'error',
			'always'
		],
		// @fixable 逗号前禁止有空格，逗号后必须要有空格
		'comma-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		// @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
				mode: 'strict',
			}
		],
		// @fixable 对象字面量只有一行时，大括号内的首尾必须有空格
		'object-curly-spacing': [
			'error',
			'always',
			{
				arraysInObjects: true,
				objectsInObjects: false
			}
		],
		// @fixable 结尾必须有分号
		'semi': [
			'error',
			'always',
			{
				omitLastInOneLineBlock: true
			}
		],
		// @fixable 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		// @fixable if, function 等的大括号之前必须要有空格，比如 if (a) {
		'space-before-blocks': [
			'error',
			'always'
		],
		// @fixable 小括号内的首尾禁止有空格
		'space-in-parens': [
			'error',
			'never'
		],
		// @fixable 操作符左右必须有空格，比如 let sum = 1 + 2;
		'space-infix-ops': 'error',
		// @fixable 注释的斜线或 * 后必须有空格
		'spaced-comment': [
			'error',
			'always',
			{
				block: {
					exceptions: [
						'*'
					],
					balanced: true
				}
			}
		],
		// @fixable case 的冒号前禁止有空格，冒号后必须有空格
		'switch-colon-spacing': [
			'error',
			{
				after: true,
				before: false
			}
		],
		// ECMAScript 6
		// 这些规则与 ES6（即通常所说的 ES2015）有关
		//
		// @fixable 箭头函数能够省略 return 的时候，必须省略，比如必须写成 () => 0，禁止写成 () => { return 0 }
		'arrow-body-style': 'error',
		// @fixable 箭头函数只有一个参数的时候，必须加括号
		// @off 应该允许灵活设置
		'arrow-parens': 'off',
		// @fixable 箭头函数的箭头前后必须有空格
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		// if else 的花括号换行规则
		'brace-style': 'error'
	},
    "overrides": [
		{
			"files": ["*.vue"],
			"rules": {
			    "indent": "off"
			}
		}
	],
	parserOptions: {
		parser: 'babel-eslint'
	}
};
