import { ServicesPageContentCard } from '@components/ServicesPageContentCard'
import { SERVICES_PAGE_CONTENT_CARDS } from '@constants/servicesPageContentCards'
import { ContentStyled } from './styled'

export const ServicesPageContent: React.FC = () => {
	return (
		<ContentStyled>
			{SERVICES_PAGE_CONTENT_CARDS.map((item) => (
				<ServicesPageContentCard {...item} key={item.key} />
			))}
		</ContentStyled>
	)
}
