import { useNavigate } from 'react-router-dom'
import { PAGES_DROPDOWN_ITEMS } from '@constants/pagesDropdownItems'
import { PagesDropdownStyled, OptionStyled } from './styled'

export const PagesDropdown: React.FC = () => {
	const navigate = useNavigate()

	// const handleNavigate: React.MouseEventHandler<HTMLOptionElement> = () => {
	// 	navigate(PAGES_DROPDOWN_ITEMS[2].route)
	// }

	return (
		<PagesDropdownStyled defaultValue="Pages">
			<option hidden disabled value="Pages">
				Pages
			</option>
			{PAGES_DROPDOWN_ITEMS.map((item) => (
				<OptionStyled key={`${item.name}id`} value={item.name} onClick={() => navigate(item.route)}>
					{item.name}
				</OptionStyled>
			))}
		</PagesDropdownStyled>
	)
}
