import { ButtonDefaultStyled, TextStyled } from './styled'

export const ButtonDefault: React.FC<{ text: string; callback?: () => void }> = ({
	text,
	callback,
}) => {
	return (
		<ButtonDefaultStyled onClick={callback}>
			<TextStyled>{text}</TextStyled>
		</ButtonDefaultStyled>
	)
}
