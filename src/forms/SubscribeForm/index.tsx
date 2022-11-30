import { sendEmailSchema } from '@forms/validationSchema'
import { useForm } from '@hooks/useForm'
import { SubscribeFormStyled, InputStyled, ErrorMessage, ButtonStyled } from './styled'

export const SubscribeForm: React.FC = () => {
	// todo: вынести логику в кастомный хук, а различия конфигурации в константы
	const { subscribeRef, disabled, handleSubmit, handleChange, values, touched, errors } = useForm({
		initialValues: {
			email: '',
		},
		validationSchema: sendEmailSchema,
		template: process.env.REACT_APP_EMAILJS_TEMPLATE_TO_ID,
		alertMessage: 'Check your mail!',
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
