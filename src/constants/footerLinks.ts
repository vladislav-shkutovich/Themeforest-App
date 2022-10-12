import { ILinkItems } from '@interfaces/index'
import {
	HOME_PAGE_ROUTE,
	SOLUTIONS_ROUTE,
	BLOG_ROUTE,
	CONTACTS_ROUTE,
	OUR_TEAM_ROUTE,
	ABOUT_US_ROUTE,
	SERVICES_ROUTE,
	FAQS_ROUTE,
} from './router'

export const FOOTER_LINKS: ILinkItems[] = [
	{ name: 'Home', route: HOME_PAGE_ROUTE },
	{ name: 'Solutions', route: SOLUTIONS_ROUTE },
	{ name: 'Blog', route: BLOG_ROUTE },
	{ name: 'Contacts', route: CONTACTS_ROUTE },
	{ name: 'Our Team', route: OUR_TEAM_ROUTE },
	{ name: 'About Us', route: ABOUT_US_ROUTE },
	{ name: 'Services', route: SERVICES_ROUTE },
	{ name: 'FAQs', route: FAQS_ROUTE },
]
