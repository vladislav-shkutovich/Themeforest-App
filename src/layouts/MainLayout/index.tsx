/* eslint-disable react/jsx-no-useless-fragment */
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { PageLayout, Card } from './styled'
import { IMainLayout } from './types'

export const MainLayout: React.FC<{ children: IMainLayout }> = ({ children }) => (
	<PageLayout>
		<Card>
			<Header />
			<>{children}</>
			<Footer />
		</Card>
	</PageLayout>
)
