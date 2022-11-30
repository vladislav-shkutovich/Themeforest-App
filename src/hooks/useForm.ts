/* eslint-disable no-alert */
import { useRef, useState } from 'react'
import emailjs, { init } from '@emailjs/browser'
import { useFormik } from 'formik'
import { IUseForm } from '@interfaces/hooksInterfaces'

export const useForm = (config: IUseForm) => {
	const { initialValues, validationSchema, template, alertMessage } = config

	init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)

	const [disabled, setDisabled] = useState(false)
	const subscribeRef = useRef<HTMLFormElement>(null)

	const { handleSubmit, handleChange, values, touched, errors } = useFormik({
		initialValues,
		validationSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: () => {
			setDisabled(true)
			emailjs
				.sendForm(
					process.env.REACT_APP_EMAILJS_SERVICE_ID,
					template,
					subscribeRef.current as HTMLFormElement,
					process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
				)
				.then(
					() => alert(alertMessage),
					() => alert('Something went wrong...'),
				)
				.finally(() => setDisabled(false))
		},
	})

	return { subscribeRef, disabled, handleSubmit, handleChange, values, touched, errors }
}
