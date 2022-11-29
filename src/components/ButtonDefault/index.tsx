import { ButtonDefaultStyled, TextStyled } from './styled'

export const ButtonDefault: React.FC<{
	text: string
	callback?: () => void
	type?: 'button' | 'submit'
	disabled?: boolean
}> = ({ text, callback, type, disabled }) => {
	const buttonType = type || 'button'

	return (
		<ButtonDefaultStyled onClick={callback} type={buttonType} disabled={disabled}>
			<TextStyled>{text}</TextStyled>
		</ButtonDefaultStyled>
	)
}
