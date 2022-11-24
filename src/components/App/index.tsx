import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
	HomePage,
	AboutUsPage,
	BlogPage,
	ContactsPage,
	FAQsPage,
	OurTeamPage,
	OurTeamSinglePage,
	ServicesPage,
	ServicesPageSingle,
	SolutionsPage,
	SolutionsSinglePage,
	NotFoundPage,
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
	SERVICES_SINGLE_ROUTE,
	NOT_FOUND_ROUTE,
	OUR_TEAM_SINGLE_ROUTE,
	SOLUTIONS_SINGLE_ROUTE,
} from '@constants/router'
import { ScrollToTop } from '@components/ScrollToTop'
// import { useAppDispatch, useAppSelector } from '@hooks/redux.hooks'
// import { changeState } from '@store/slices/appSlice'
// import { selectAppState } from '@store/selectors'

// todo рендерить массив с роутами
export const App: React.FC = () => {
	// const dispatch = useAppDispatch()
	// dispatch(changeState('new state'))

	// const appState = useAppSelector(selectAppState)
	// console.log(appState)

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
				<Route path={ABOUT_US_ROUTE} element={<AboutUsPage />} />
				<Route path={BLOG_ROUTE} element={<BlogPage />} />
				<Route path={CONTACTS_ROUTE} element={<ContactsPage />} />
				<Route path={FAQS_ROUTE} element={<FAQsPage />} />
				<Route path={OUR_TEAM_ROUTE} element={<OurTeamPage />} />
				<Route path={OUR_TEAM_SINGLE_ROUTE} element={<OurTeamSinglePage />} />
				<Route path={SERVICES_ROUTE} element={<ServicesPage />} />
				<Route path={SERVICES_SINGLE_ROUTE} element={<ServicesPageSingle />} />
				<Route path={SOLUTIONS_ROUTE} element={<SolutionsPage />} />
				<Route path={SOLUTIONS_SINGLE_ROUTE} element={<SolutionsSinglePage />} />
				<Route path={NOT_FOUND_ROUTE} element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	)
}
