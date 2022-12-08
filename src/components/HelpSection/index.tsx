/* eslint-disable no-irregular-whitespace */
/* eslint-disable prettier/prettier */
import { ButtonDefault } from '@components/ButtonDefault'
import { CONTACTS_ROUTE } from '@constants/router'
import { useNavigate } from 'react-router-dom'
import { HelpSectionStyled } from './styled'

export const HelpSection: React.FC = () => {
	const navigate = useNavigate()
	const handleNavigate = () => {
		navigate(CONTACTS_ROUTE)
	}
	return (
		<HelpSectionStyled>
			<h2>Do you need help?</h2>
			<p>
				Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
				ut aliquid ex ea commodi.
			</p>
			<ButtonDefault text="Contact Us" callback={handleNavigate} />
		</HelpSectionStyled>
	)
}
