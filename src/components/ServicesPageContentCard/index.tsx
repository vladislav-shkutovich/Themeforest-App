import { ButtonReadMore } from '@components/ButtonReadMore'
import { IServicesContentCard } from '@interfaces/index'
import { SERVICES_ROUTE } from '@constants/router'
import { ContentCardStyled } from './styled'

export const ServicesPageContentCard: React.FC<IServicesContentCard> = ({ image, title, text }) => {
	return (
		<ContentCardStyled>
			<img src={image} alt="Services Icon" />
			<h4>{title}</h4>
			<p>{text}</p>
			<ButtonReadMore text="Read More" route={SERVICES_ROUTE} />
		</ContentCardStyled>
	)
}
