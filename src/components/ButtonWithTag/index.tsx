import { ButtonWithTagStyled } from './styled'

export const ButtonWithTag: React.FC<{
	text: string
	isSelected?: boolean
	callback?: () => void
}> = ({ text, isSelected, callback }) => {
	return (
		<ButtonWithTagStyled onClick={callback} isSelected={isSelected || false}>
			{text}
		</ButtonWithTagStyled>
	)
}
