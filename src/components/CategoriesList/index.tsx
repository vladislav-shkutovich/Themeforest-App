import listChevronRight from '@assets/icons/list_chevron_right.svg'
import { Link } from 'react-router-dom'
import { CategoriesListStyled } from './styled'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CategoriesList: React.FC<{ list: any[] }> = ({ list }) => {
	return (
		<CategoriesListStyled>
			{list.map((item) => (
				<li key={item.id}>
					<Link to={`${item.baseRoute}/${item.id}`}>
						{item.title}
						<img alt="chevron" src={listChevronRight} />
					</Link>
				</li>
			))}
		</CategoriesListStyled>
	)
}
