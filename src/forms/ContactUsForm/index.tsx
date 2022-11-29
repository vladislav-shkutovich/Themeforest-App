/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import { useFormik } from 'formik'
import { useState, useRef } from 'react'
import emailjs, { init } from '@emailjs/browser'
import { getEmailSchema } from '@forms/validationSchema'
import { ButtonDefault } from '@components/ButtonDefault'
import { FormStyled, ErrorMessage, InputStyled } from './styled'

init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)

export const ContactUsForm: React.FC = () => {
	const [disabled, setDisabled] = useState(false)
	const subscribeRef = useRef<HTMLFormElement>(null)

	const { handleSubmit, handleChange, values, touched, errors } = useFormik({
		initialValues: {
			name: '',
			email: '',
			theme: '',
			message: '',
		},
		validationSchema: getEmailSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: () => {
			setDisabled(true)
			emailjs
				.sendForm(
					process.env.REACT_APP_EMAILJS_SERVICE_ID,
					process.env.REACT_APP_EMAILJS_TEMPLATE_FROM_ID,
					subscribeRef.current as HTMLFormElement,
					process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
				)
				.then(
					() => alert('Thank you for your opinion!'),
					() => alert('Something went wrong...'),
				)
				.finally(() => setDisabled(false))
		},
	})

	return (
		<FormStyled ref={subscribeRef} onSubmit={handleSubmit}>
			<h3>Contact Us</h3>

			<div>
				<label htmlFor="name">Your Name</label>
				{errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
			</div>
			<InputStyled
				type="text"
				name="name"
				id="Name"
				value={values.name}
				error={touched.name && Boolean(errors.name)}
				message={errors.name}
				onChange={handleChange}
			/>

			<div>
				<label htmlFor="email">Your Email</label>
				{errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
			</div>
			<InputStyled
				type="text"
				name="email"
				id="Email"
				value={values.email}
				error={touched.email && Boolean(errors.email)}
				message={errors.email}
				onChange={handleChange}
			/>

			<div>
				<label htmlFor="theme">Theme</label>
				{errors.theme && <ErrorMessage>{errors.theme}</ErrorMessage>}
			</div>
			<InputStyled
				type="text"
				name="theme"
				id="Theme"
				value={values.theme}
				error={touched.theme && Boolean(errors.theme)}
				message={errors.theme}
				onChange={handleChange}
			/>
			<div>
				<label htmlFor="message">Your Message</label>
				{errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
			</div>
			<InputStyled
				type="text"
				name="message"
				id="Message"
				value={values.message}
				error={touched.message && Boolean(errors.message)}
				message={errors.message}
				onChange={handleChange}
			/>

			<ButtonDefault text="Send" disabled={disabled} type="submit" />
		</FormStyled>
	)
}
