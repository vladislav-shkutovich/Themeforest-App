import { Fragment } from 'react'
import { getEmailSchema } from '@forms/validationSchema'
import { ButtonDefault } from '@components/ButtonDefault'
import { CONTACT_US_FORM_FIELDS } from '@constants/formFields'
import { useForm } from '@hooks/useForm'
import { FormStyled, ErrorMessage, InputStyled } from './styled'

export const ContactUsForm: React.FC = () => {
	const { subscribeRef, disabled, handleSubmit, handleChange, values, touched, errors } = useForm({
		initialValues: {
			name: '',
			email: '',
			theme: '',
			message: '',
		},
		validationSchema: getEmailSchema,
		template: process.env.REACT_APP_EMAILJS_TEMPLATE_FROM_ID,
		alertMessage: 'Thank you for your opinion!',
	})

	return (
		<FormStyled ref={subscribeRef} onSubmit={handleSubmit}>
			<h3>Contact Us</h3>

			{CONTACT_US_FORM_FIELDS.map(({ id, name }) => (
				<Fragment key={id}>
					<div>
						<label htmlFor={name}>Your {id}</label>
						{errors[name] && <ErrorMessage>{errors[name]}</ErrorMessage>}
					</div>
					<InputStyled
						type="text"
						name={name}
						id={id}
						value={values[name]}
						error={touched[name] && Boolean(errors[name])}
						message={errors[name]}
						onChange={handleChange}
					/>
				</Fragment>
			))}

			<ButtonDefault text="Send" disabled={disabled} type="submit" />
		</FormStyled>
	)
}
