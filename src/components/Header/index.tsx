import { Link, useNavigate } from 'react-router-dom'
import { HOME_PAGE_ROUTE, BLOG_ROUTE, CONTACTS_ROUTE, SOLUTIONS_ROUTE } from '@constants/router'
import logo from '@assets/icons/logo_blue.svg'
import { ButtonWatchTheDemo } from './ButtonWatchTheDemo'
import { PagesDropdown } from './PagesDropdown'
import { HeaderStyled, LogoStyled, LinksContainerStyled, LinkStyled } from './styled'

export const Header: React.FC = () => {
	const navigate = useNavigate()
	const handleNavigateFromLogo: React.MouseEventHandler<HTMLImageElement> = () => {
		navigate(HOME_PAGE_ROUTE)
	}

	return (
		<HeaderStyled>
			<LogoStyled alt="Logo" src={logo} onClick={handleNavigateFromLogo} />
			<LinksContainerStyled>
				<LinkStyled>
					<Link to={HOME_PAGE_ROUTE}>Home</Link>
				</LinkStyled>
				<LinkStyled>
					<Link to={SOLUTIONS_ROUTE}>Solutions</Link>
				</LinkStyled>
				<PagesDropdown />
				<LinkStyled>
					<Link to={BLOG_ROUTE}>Blog</Link>
				</LinkStyled>
				<LinkStyled>
					<Link to={CONTACTS_ROUTE}>Contacts</Link>
				</LinkStyled>
			</LinksContainerStyled>
			<ButtonWatchTheDemo />
		</HeaderStyled>
	)
}
