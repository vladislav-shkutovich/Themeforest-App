import { SolutionsPageContentCard } from '@components/SolutionsPageContentCard'
import { SOLUTIONS_PAGE_CONTENT_CARDS } from '@constants/solutionsPageContentCards'
import { ContentStyled } from './styled'

export const SolutionsPageContent: React.FC = () => {
	return (
		<ContentStyled>
			{SOLUTIONS_PAGE_CONTENT_CARDS.map((item) => (
				<SolutionsPageContentCard {...item} key={item.id} />
			))}
		</ContentStyled>
	)
}
