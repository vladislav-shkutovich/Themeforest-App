import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PAGES_ROUTES } from '@constants/router'
import { ScrollToTop } from '@components/ScrollToTop'
import { Loader } from '@components/Loader'

export const App: React.FC = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Suspense fallback={<Loader />}>
				<Routes>
					{PAGES_ROUTES.map(({ id, path, element }) => (
						<Route key={id} path={path} element={element} />
					))}
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
