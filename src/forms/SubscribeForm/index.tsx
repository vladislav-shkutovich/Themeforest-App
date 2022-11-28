/* eslint-disable no-alert */
import { useFormik } from 'formik'
import { useState, useRef } from 'react'
import emailjs, { init } from '@emailjs/browser'
import { SubscribeFormStyled, InputStyled, ButtonStyled } from './styled'

export const SubscribeForm: React.FC = () => {
	init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
	const [disabled, setDisabled] = useState(false)
	const subscribeRef = useRef<HTMLFormElement>(null)

	const { handleSubmit } = useFormik({
		initialValues: {},
		// validationSchema: {},
		validateOnChange: false,
		validateOnBlur: false,
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
			<InputStyled placeholder="Your email" name="email" />
			<ButtonStyled type="submit" disabled={disabled}>
				Get email
			</ButtonStyled>
		</SubscribeFormStyled>
	)
}
