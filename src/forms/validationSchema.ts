import { validationFields } from '@constants/validationFields'
import * as yup from 'yup'

const { NAME, EMAIL, MESSAGE, THEME } = validationFields

export const sendEmailSchema = yup.object().shape({
	email: yup.string().email('Entered email is not valid.').required(EMAIL.req),
})

export const getEmailSchema = yup.object().shape({
	name: yup
		.string()
		.min(NAME.min, 'Too Short!')
		.max(NAME.max, `Max ${NAME.max} symbols`)
		.required(NAME.req),
	email: yup.string().email('Entered email is not valid.').required(EMAIL.req),
	theme: yup
		.string()
		.min(THEME.min, 'Too Short!')
		.max(THEME.max, `Max ${THEME.max} symbols`)
		.required(THEME.req),
	message: yup
		.string()
		.min(THEME.min, 'Too Short!')
		.max(THEME.max, `Max ${MESSAGE.max} symbols`)
		.required(MESSAGE.req),
})
