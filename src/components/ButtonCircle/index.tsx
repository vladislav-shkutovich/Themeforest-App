import { ButtonCircleStyled, TextStyled } from './styled'

export const ButtonCircle: React.FC<{
	text: string
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	callback?: any
	value?: string
}> = ({ text, callback, value }) => {
	return (
		<ButtonCircleStyled onClick={callback} value={value}>
			<TextStyled>{text}</TextStyled>
		</ButtonCircleStyled>
	)
}
