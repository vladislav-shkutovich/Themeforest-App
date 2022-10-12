import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
	HomePage,
	AboutUsPage,
	BlogPage,
	ContactsPage,
	FAQsPage,
	OurTeamPage,
	ServicesPage,
	SolutionsPage,
} from '@pages/index'
import {
	HOME_PAGE_ROUTE,
	ABOUT_US_ROUTE,
	BLOG_ROUTE,
	CONTACTS_ROUTE,
	FAQS_ROUTE,
	OUR_TEAM_ROUTE,
	SERVICES_ROUTE,
	SOLUTIONS_ROUTE,
} from '@constants/router'

export const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
			<Route path={ABOUT_US_ROUTE} element={<AboutUsPage />} />
			<Route path={BLOG_ROUTE} element={<BlogPage />} />
			<Route path={CONTACTS_ROUTE} element={<ContactsPage />} />
			<Route path={FAQS_ROUTE} element={<FAQsPage />} />
			<Route path={OUR_TEAM_ROUTE} element={<OurTeamPage />} />
			<Route path={SERVICES_ROUTE} element={<ServicesPage />} />
			<Route path={SOLUTIONS_ROUTE} element={<SolutionsPage />} />
		</Routes>
	</BrowserRouter>
)
