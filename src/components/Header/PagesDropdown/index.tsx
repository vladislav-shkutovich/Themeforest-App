import { useNavigate } from 'react-router-dom'
import { PAGES_DROPDOWN_ITEMS } from '@constants/pagesDropdownItems'
import { PagesDropdownStyled, OptionStyled } from './styled'

export const PagesDropdown: React.FC = () => {
	const navigate = useNavigate()
	const handleNavigate: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
		navigate(e.target.value)
	}

	return (
		<PagesDropdownStyled defaultValue="Pages" onChange={handleNavigate}>
			<option hidden disabled value="Pages">
				Pages
			</option>
			{PAGES_DROPDOWN_ITEMS.map((item) => (
				<OptionStyled key={`${item.name}id`} value={item.route}>
					{item.name}
				</OptionStyled>
			))}
		</PagesDropdownStyled>
	)
}
