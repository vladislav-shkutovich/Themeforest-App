/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonWithTagStyled } from './styled'

export const ButtonWithTag: React.FC<{
	text: string
	isActive: boolean
	callback?: any
}> = ({ text, isActive, callback }) => {
	return (
		<ButtonWithTagStyled onClick={callback} isActive={isActive}>
			{text}
		</ButtonWithTagStyled>
	)
}
