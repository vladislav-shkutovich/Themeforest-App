/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonWithTagStyled } from './styled'

export const ButtonWithTag: React.FC<{
	text: string
	isActive: boolean
	callback?: any
	disabled?: boolean
}> = ({ text, isActive, callback, disabled }) => {
	return (
		<ButtonWithTagStyled disabled={disabled} onClick={callback} isActive={isActive}>
			{text}
		</ButtonWithTagStyled>
	)
}
