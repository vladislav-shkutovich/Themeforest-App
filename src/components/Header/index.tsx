// import {
// 	HOME_PAGE_ROUTE,
// 	ABOUT_US_ROUTE,
// 	BLOG_ROUTE,
// 	CONTACTS_ROUTE,
// 	FAQS_ROUTE,
// 	OUR_TEAM_ROUTE,
// 	SOLUTIONS_ROUTE,
// } from '@constants/router'
import { PAGES_DROPDOWN_ITEMS } from '@constants/pagesDropdownItems'
import {
	HeaderStyled,
	LogoStyled,
	LinksContainerStyled,
	LinkStyled,
	PagesDropdownStyled,
} from './styled'
import myImg from '../../assets/icons/logo_blue.svg'

export const Header: React.FC = () => (
	<HeaderStyled>
		<LogoStyled alt="Logo" src={myImg} />
		<LinksContainerStyled>
			<LinkStyled>Home</LinkStyled>
			<LinkStyled>Solutions</LinkStyled>
			<PagesDropdownStyled>
				{PAGES_DROPDOWN_ITEMS.map((item) => (
					<option key={`${item}id`}>{item}</option>
				))}
			</PagesDropdownStyled>
			<LinkStyled>Blog</LinkStyled>
			<LinkStyled>Contacts</LinkStyled>
		</LinksContainerStyled>
		{/* здесь будет кнопка отдельным компонентом */}
		<div>Watch The Demo</div>
	</HeaderStyled>
)
