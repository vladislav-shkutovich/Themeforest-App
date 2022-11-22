import { MainLayout } from '@layouts/MainLayout'
import { Link, useParams } from 'react-router-dom'
import { NotFoundPage } from '@pages/NotFound'
import { SOLUTIONS_SINGLE_ITEMS } from '@constants/solutionsSingleItems'
import { HOME_PAGE_ROUTE, SOLUTIONS_ROUTE } from '@constants/router'
import { SolutionsSingleContent } from '@components/SolutionsSingleContent'
import { HelpSection } from '@components/HelpSection'
import { IntroductionStyled } from './styled'

export const SolutionsSinglePage: React.FC = () => {
	const { id: solutionsSingleId } = useParams()

	const solutionsSingleItem = SOLUTIONS_SINGLE_ITEMS.find((item) => item.id === solutionsSingleId)
	if (!solutionsSingleItem) return <NotFoundPage />

	const { title } = solutionsSingleItem

	return (
		<MainLayout>
			<IntroductionStyled>
				<h1>{title}</h1>
				<div>
					<Link to={HOME_PAGE_ROUTE}>Home</Link>
					<Link to={SOLUTIONS_ROUTE}>Solutions</Link>
					<h6>{title}</h6>
				</div>
			</IntroductionStyled>
			<SolutionsSingleContent solutionsSingleItem={solutionsSingleItem} />
			<HelpSection />
		</MainLayout>
	)
}
