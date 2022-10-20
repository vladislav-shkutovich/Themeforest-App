import { useNavigate } from 'react-router-dom'
import { PAGES_DROPDOWN_ITEMS } from '@constants/pagesDropdownItems'
import { HeaderPagesDropdownStyled, OptionStyled } from './styled'

export const HeaderPagesDropdown: React.FC = () => {
	const navigate = useNavigate()
	const handleNavigate: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
		navigate(e.target.value)
	}

	return (
		<HeaderPagesDropdownStyled defaultValue="Pages" onChange={handleNavigate}>
			<option hidden disabled value="Pages">
				Pages
			</option>
			{PAGES_DROPDOWN_ITEMS.map((item) => (
				<OptionStyled key={`${item.name}id`} value={item.route}>
					{item.name}
				</OptionStyled>
			))}
		</HeaderPagesDropdownStyled>
	)
}
