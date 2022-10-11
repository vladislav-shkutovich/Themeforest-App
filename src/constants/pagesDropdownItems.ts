import { SERVICES_ROUTE, ABOUT_US_ROUTE, OUR_TEAM_ROUTE, FAQS_ROUTE } from '@constants/router'

import { IDropdownItems } from '@interfaces/index'

export const PAGES_DROPDOWN_ITEMS: IDropdownItems[] = [
	{ name: 'Services', route: SERVICES_ROUTE },
	{ name: 'About Us', route: ABOUT_US_ROUTE },
	{ name: 'Our Team', route: OUR_TEAM_ROUTE },
	{ name: 'FAQs', route: FAQS_ROUTE },
]
