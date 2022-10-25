import arrowRight from '@assets/icons/arrow_right.svg'
import { Link } from 'react-router-dom'
import { ButtonReadMoreStyled } from './styled'

export const ButtonReadMore: React.FC<{ text: string; route: string }> = ({ text, route }) => {
	return (
		<ButtonReadMoreStyled type="button">
			<Link to={route}>
				{text} <img src={arrowRight} alt="arrow" />
			</Link>
		</ButtonReadMoreStyled>
	)
}
