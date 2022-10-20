import { ButtonsContainer, ButtonSwitchStyled } from './styled'

export const ButtonsSwitch: React.FC<{ activityState: boolean[]; callback: () => void }> = ({
	activityState,
	callback,
}) => {
	return (
		<ButtonsContainer>
			<ButtonSwitchStyled onClick={callback} isActive={activityState[0]}>
				Mo
			</ButtonSwitchStyled>
			<ButtonSwitchStyled onClick={callback} isActive={activityState[1]}>
				Yr
			</ButtonSwitchStyled>
		</ButtonsContainer>
	)
}
