/* eslint-disable no-alert */
import { useFormik } from 'formik'
import { useState, useRef } from 'react'
import emailjs, { init } from '@emailjs/browser'
import { sendEmailSchema } from '@forms/validationSchema'
import { SubscribeFormStyled, InputStyled, ErrorMessage, ButtonStyled } from './styled'

init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)

export const SubscribeForm: React.FC = () => {
	const [disabled, setDisabled] = useState(false)
	const subscribeRef = useRef<HTMLFormElement>(null)

	const { handleSubmit, handleChange, values, touched, errors } = useFormik({
		initialValues: {
			email: '',
		},
		validationSchema: sendEmailSchema,
		validateOnChange: true,
		validateOnBlur: true,
		onSubmit: () => {
			setDisabled(true)
			emailjs
				.sendForm(
					process.env.REACT_APP_EMAILJS_SERVICE_ID,
					process.env.REACT_APP_EMAILJS_TEMPLATE_TO_ID,
					subscribeRef.current as HTMLFormElement,
					process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
				)
				.then(
					() => alert('Check your mail!'),
					() => alert('Something went wrong...'),
				)
				.finally(() => setDisabled(false))
		},
	})

	return (
		<SubscribeFormStyled ref={subscribeRef} onSubmit={handleSubmit}>
			<>
				<InputStyled
					placeholder="Your email"
					name="email"
					onChange={handleChange}
					value={values.email}
					error={touched.email && Boolean(errors.email)}
					message={errors.email}
				/>
				{errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
			</>
			<ButtonStyled type="submit" disabled={disabled}>
				Send
			</ButtonStyled>
		</SubscribeFormStyled>
	)
}
