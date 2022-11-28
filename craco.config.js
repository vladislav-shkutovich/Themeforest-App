/* eslint-disable */
const path = require('path')
const resolve = (arg) => path.resolve(__dirname, arg)

module.exports = {
	webpack: {
		alias: {
			'@components': resolve('src/components'),
			'@interfaces': resolve('src/interfaces/'),
			'@config': resolve('src/config/'),
			'@constants': resolve('src/constants/'),
			'@store': resolve('src/store'),
			'@utils': resolve('src/utils'),
			'@helpers': resolve('src/helpers'),
			'@hooks': resolve('src/hooks'),
			'@hoc': resolve('src/hoc'),
			'@sagas': resolve('src/sagas'),
			'@pages': resolve('src/pages'),
			'@layouts': resolve('src/layouts'),
			'@assets': resolve('src/assets'),
			'@forms': resolve('src/forms'),
		},
	},
}
