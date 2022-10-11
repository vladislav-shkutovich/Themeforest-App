import vector from '@assets/icons/Vector.svg'
import { ButtonWatchTheDemoStyled, VectorStyled, TextStyled } from './styled'

export const ButtonWatchTheDemo: React.FC = () => (
	<ButtonWatchTheDemoStyled>
		<VectorStyled alt="Vector" src={vector} />
		<TextStyled>Watch The Demo</TextStyled>
	</ButtonWatchTheDemoStyled>
)
