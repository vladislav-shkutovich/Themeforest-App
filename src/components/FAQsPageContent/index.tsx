import { FAQsPageContentCard } from '@components/FAQsPageContentCard'
import { FAQS_PAGE_CARDS } from '@constants/faqsPageCards'
import { ContentStyled } from './styled'

export const FAQsPageContent: React.FC = () => {
	return (
		<ContentStyled>
			{FAQS_PAGE_CARDS.map((item) => (
				<FAQsPageContentCard {...item} key={item.id} />
			))}
		</ContentStyled>
	)
}
