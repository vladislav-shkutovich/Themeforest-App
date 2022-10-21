import { ReactComponent as ButtonPrev } from '@assets/buttons/prev.svg'
import { ReactComponent as ButtonNext } from '@assets/buttons/next.svg'
import { ButtonSliderDefaultStyled, ButtonsSliderContainer } from './styled'

export const ButtonsSliderDefault: React.FC<{
	text?: string
	callbackPrev?: () => void
	callbackNext?: () => void
	activityState?: boolean[]
}> = ({ callbackPrev, callbackNext, activityState }) => {
	return (
		<ButtonsSliderContainer>
			<ButtonSliderDefaultStyled onClick={callbackPrev} disabled={activityState?.at(0)}>
				<ButtonPrev />
			</ButtonSliderDefaultStyled>
			<ButtonSliderDefaultStyled onClick={callbackNext} disabled={activityState?.at(1)}>
				<ButtonNext />
			</ButtonSliderDefaultStyled>
		</ButtonsSliderContainer>
	)
}
