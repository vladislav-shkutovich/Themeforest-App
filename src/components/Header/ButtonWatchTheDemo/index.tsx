import vector from '@assets/icons/icon_play.svg'
import { ButtonWatchTheDemoStyled, VectorStyled, TextStyled } from './styled'

export const ButtonWatchTheDemo: React.FC = () => (
	<ButtonWatchTheDemoStyled>
		<VectorStyled alt="Vector" src={vector} />
		<TextStyled>Watch The Demo</TextStyled>
	</ButtonWatchTheDemoStyled>
)
