import { ButtonCircleStyled, TextStyled } from './styled'

export const ButtonCircle: React.FC<{ text: string; callback?: () => void }> = ({
	text,
	callback,
}) => {
	return (
		<ButtonCircleStyled onClick={callback}>
			<TextStyled>{text}</TextStyled>
		</ButtonCircleStyled>
	)
}
