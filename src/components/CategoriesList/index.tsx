import listChevronRight from '@assets/icons/list_chevron_right.svg'
import { CategoriesListStyled } from './styled'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CategoriesList: React.FC<{ list: any[] }> = ({ list }) => {
	return (
		<CategoriesListStyled>
			{list.map((item) => (
				<li key={item.key}>
					{item.title}
					<img alt="chevron" src={listChevronRight} />
				</li>
			))}
		</CategoriesListStyled>
	)
}
