import { ReactComponent as ButtonPrev } from '@assets/buttons/prev.svg'
import { ReactComponent as ButtonNext } from '@assets/buttons/next.svg'
import { ButtonSliderDefaultStyled, ButtonsSliderContainer } from './styled'

export const ButtonsSliderDefault: React.FC<{ text?: string; callback?: () => void }> = ({
	callback,
}) => {
	return (
		<ButtonsSliderContainer>
			<ButtonSliderDefaultStyled onClick={callback} disabled>
				<ButtonPrev />
			</ButtonSliderDefaultStyled>
			<ButtonSliderDefaultStyled onClick={callback}>
				<ButtonNext />
			</ButtonSliderDefaultStyled>
		</ButtonsSliderContainer>
	)
}
