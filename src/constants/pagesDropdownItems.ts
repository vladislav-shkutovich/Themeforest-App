import { SERVICES_ROUTE, ABOUT_US_ROUTE, OUR_TEAM_ROUTE, FAQS_ROUTE } from '@constants/router'

import { ILinkItems } from '@interfaces/index'

export const PAGES_DROPDOWN_ITEMS: ILinkItems[] = [
	{ name: 'Services', route: SERVICES_ROUTE },
	{ name: 'About Us', route: ABOUT_US_ROUTE },
	{ name: 'Our Team', route: OUR_TEAM_ROUTE },
	{ name: 'FAQs', route: FAQS_ROUTE },
]
