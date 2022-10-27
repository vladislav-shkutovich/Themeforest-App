import { ButtonReadMore } from '@components/ButtonReadMore'
import { HOME_PAGE_ROUTE } from '@constants/router'
import { MainLayout } from '@layouts/MainLayout'
import { MessageStyled } from './styles'

export const NotFoundPage: React.FC = () => {
	return (
		<MainLayout>
			<MessageStyled>
				<h1>404</h1>
				<p>Page Not Found...</p>
				<ButtonReadMore text="Go Home" route={HOME_PAGE_ROUTE} />
			</MessageStyled>
		</MainLayout>
	)
}
