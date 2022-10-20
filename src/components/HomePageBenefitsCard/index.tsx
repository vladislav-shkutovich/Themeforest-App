import { IHomepageBenefitsCard } from '@interfaces/index'
import { CardStyled } from './styled'

export const HomePageBenefitsCard: React.FC<IHomepageBenefitsCard> = ({
	icon,
	heading,
	text,
	key,
}) => {
	return (
		<CardStyled key={key}>
			<img alt={key} src={icon} />
			<h5>{heading}</h5>
			<p>{text}</p>
		</CardStyled>
	)
}
