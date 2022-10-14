/* eslint-disable react/jsx-no-useless-fragment */
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { SubscribeSection } from '@components/Header/SubscribeSection'
import { IMainLayout } from '@interfaces/index'
import { PageLayout, Card } from './styled'

export const MainLayout: React.FC<{ children: IMainLayout }> = ({ children }) => (
	<PageLayout>
		<Card>
			<Header />
			<>{children}</>
			<SubscribeSection />
			<Footer />
		</Card>
	</PageLayout>
)
