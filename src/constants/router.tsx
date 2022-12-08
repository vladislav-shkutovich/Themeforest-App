/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React from 'react'
import { IPagesRoutes } from '@interfaces/constantsInterfaces'

export const ABOUT_US_ROUTE = '/Themeforest-App/about-us-page'
export const BLOG_BASE_ROUTE = '/Themeforest-App/blog-page'
export const BLOG_ROUTE = '/Themeforest-App/blog-page/:id'
export const BLOG_SINGLE_ROUTE = '/Themeforest-App/blog-page/blog-1'
export const CONTACTS_ROUTE = '/Themeforest-App/contacts-page'
export const FAQS_ROUTE = '/Themeforest-App/faqs-page'
export const HOME_PAGE_ROUTE = '/Themeforest-App'
export const OUR_TEAM_ROUTE = '/Themeforest-App/our-team-page'
export const OUR_TEAM_SINGLE_ROUTE = '/Themeforest-App/our-team-page/:id'
export const SERVICES_ROUTE = '/Themeforest-App/services-page'
export const SERVICES_SINGLE_ROUTE = '/Themeforest-App/services-page/:id'
export const SOLUTIONS_ROUTE = '/Themeforest-App/solutions-page'
export const SOLUTIONS_SINGLE_ROUTE = '/Themeforest-App/solutions-page/:id'
export const NOT_FOUND_ROUTE = '*'

const HomePage = React.lazy(() => import('@pages/Home'))
const AboutUsPage = React.lazy(() => import('@pages/AboutUs'))
const BlogPage = React.lazy(() => import('@pages/Blog'))
const ContactsPage = React.lazy(() => import('@pages/Contacts'))
const FAQsPage = React.lazy(() => import('@pages/FAQs'))
const OurTeamPage = React.lazy(() => import('@pages/OurTeam'))
const OurTeamSinglePage = React.lazy(() => import('@pages/OurTeamSingle'))
const ServicesPage = React.lazy(() => import('@pages/Services'))
const ServicesPageSingle = React.lazy(() => import('@pages/ServicesSingle'))
const SolutionsPage = React.lazy(() => import('@pages/Solutions'))
const SolutionsSinglePage = React.lazy(() => import('@pages/SolutionsSingle'))
const NotFoundPage = React.lazy(() => import('@pages/NotFound'))

export const PAGES_ROUTES: IPagesRoutes[] = [
	{
		id: 'home',
		path: HOME_PAGE_ROUTE,
		element: <HomePage />,
	},
	{
		id: 'about-us',
		path: ABOUT_US_ROUTE,
		element: <AboutUsPage />,
	},
	{
		id: 'blog',
		path: BLOG_ROUTE,
		element: <BlogPage />,
	},
	{
		id: 'contacts',
		path: CONTACTS_ROUTE,
		element: <ContactsPage />,
	},
	{
		id: 'faqs',
		path: FAQS_ROUTE,
		element: <FAQsPage />,
	},
	{
		id: 'our-team',
		path: OUR_TEAM_ROUTE,
		element: <OurTeamPage />,
	},
	{
		id: 'our-team-single',
		path: OUR_TEAM_SINGLE_ROUTE,
		element: <OurTeamSinglePage />,
	},
	{
		id: 'services',
		path: SERVICES_ROUTE,
		element: <ServicesPage />,
	},
	{
		id: 'services-single',
		path: SERVICES_SINGLE_ROUTE,
		element: <ServicesPageSingle />,
	},
	{
		id: 'solutions',
		path: SOLUTIONS_ROUTE,
		element: <SolutionsPage />,
	},
	{
		id: 'solutions-single',
		path: SOLUTIONS_SINGLE_ROUTE,
		element: <SolutionsSinglePage />,
	},
	{
		id: 'not-found',
		path: NOT_FOUND_ROUTE,
		element: <NotFoundPage />,
	},
]
