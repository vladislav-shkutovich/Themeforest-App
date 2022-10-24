import { IHomepageBenefitsCard } from '@interfaces/index'
import { CardStyled } from './styled'

export const HomePageBenefitsCard: React.FC<IHomepageBenefitsCard> = ({ icon, heading, text }) => {
	return (
		<CardStyled>
			<img alt="Icon" src={icon} />
			<h5>{heading}</h5>
			<p>{text}</p>
		</CardStyled>
	)
}
