import { ButtonReadMore } from '@components/ButtonReadMore'
import { IServicesContentCard } from '@interfaces/index'
import { ContentCardStyled } from './styled'

export const OurTeamContentCard: React.FC<IServicesContentCard> = ({ id, image, title, text }) => {
	return (
		<ContentCardStyled>
			<img src={image} alt="Services Icon" />
			<h4>{title}</h4>
			<p>{text}</p>
			<ButtonReadMore text="Read More" route={id} />
		</ContentCardStyled>
	)
}
