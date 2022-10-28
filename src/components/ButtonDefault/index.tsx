import { ButtonDefaultStyled, TextStyled } from './styled'

export const ButtonDefault: React.FC<{
	text: string
	callback?: () => void
	type?: 'button' | 'submit'
}> = ({ text, callback, type }) => {
	const buttonType = type || 'button'

	return (
		<ButtonDefaultStyled onClick={callback} type={buttonType}>
			<TextStyled>{text}</TextStyled>
		</ButtonDefaultStyled>
	)
}
