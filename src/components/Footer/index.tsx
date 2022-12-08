/* eslint-disable no-irregular-whitespace */
import { Link, useNavigate } from 'react-router-dom'
import { HOME_PAGE_ROUTE } from '@constants/router'

import logo from '@assets/icons/logo_white.svg'
import { FOOTER_ICONS } from '@constants/footerIcons'
import { FOOTER_LINKS } from '@constants/footerLinks'

import {
	FooterContainerStyled,
	FooterTopPartStyled,
	InfoContainerStyled,
	LogoStyled,
	IconContainerStyled,
	IconStyled,
	LinksContainerStyled,
	ContactsContainerStyled,
	HeadingStyled,
	ParagraphStyled,
	LineSeparatorStyled,
	RightsContainerStyled,
	RightsTextStyled,
	PrivacyTextStyled,
} from './styled'

export const Footer: React.FC = () => {
	const navigate = useNavigate()
	const handleNavigateFromLogo: React.MouseEventHandler<HTMLImageElement> = () => {
		navigate(HOME_PAGE_ROUTE)
	}

	return (
		<FooterContainerStyled>
			<FooterTopPartStyled>
				<InfoContainerStyled>
					<LogoStyled alt="Logo" src={logo} onClick={handleNavigateFromLogo} />
					<ParagraphStyled>
						Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
						laboriosam, nisi ut aliquid ex ea commodi.
					</ParagraphStyled>
					<IconContainerStyled>
						{FOOTER_ICONS.map(({ name, route }) => (
							<a href={route} key={name}>
								<IconStyled alt="icon" src={name} />
							</a>
						))}
					</IconContainerStyled>
				</InfoContainerStyled>
				<LinksContainerStyled>
					<HeadingStyled>Quick Link</HeadingStyled>
					{FOOTER_LINKS.map((item) => (
						<ParagraphStyled key={item.name}>
							<Link to={item.route}>{item.name}</Link>
						</ParagraphStyled>
					))}
				</LinksContainerStyled>
				<ContactsContainerStyled>
					<HeadingStyled>Contact Info</HeadingStyled>
					<ParagraphStyled>ensome@info.co.us</ParagraphStyled>
					<ParagraphStyled>+1 601-201-5580</ParagraphStyled>
					<ParagraphStyled>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</ParagraphStyled>
				</ContactsContainerStyled>
			</FooterTopPartStyled>

			<LineSeparatorStyled />

			<RightsContainerStyled>
				<RightsTextStyled>Ensome© 2022 All Rights Reserved</RightsTextStyled>
				<PrivacyTextStyled>Privacy policy</PrivacyTextStyled>
				<PrivacyTextStyled>Terms of us</PrivacyTextStyled>
			</RightsContainerStyled>
		</FooterContainerStyled>
	)
}
