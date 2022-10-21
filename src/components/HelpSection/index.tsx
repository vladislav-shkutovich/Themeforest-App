/* eslint-disable no-irregular-whitespace */
import { ButtonDefault } from '@components/ButtonDefault'
import { HelpSectionStyled } from './styled'

export const HelpSection: React.FC = () => {
	return (
		<HelpSectionStyled>
			<h2>Do you need help?</h2>
			<p>
				Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
				nisi ut aliquid ex ea commodi.
			</p>
			<ButtonDefault text="Contact Us" />
		</HelpSectionStyled>
	)
}
