import { memo } from 'react'
import { CompanyOverview } from '@components/CompanyOverview'
import { HelpSection } from '@components/HelpSection'
import { ServicesPageContent } from '@components/ServicesPageContent'
import { MainLayout } from '@layouts/MainLayout'
import { IntroductionStyled } from './styled'

const ServicesPage: React.FC = () => (
	<MainLayout>
		<IntroductionStyled>
			<h6>Services</h6>
			<h1>Data Analytics Services</h1>
			<p>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
				laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore.
			</p>
		</IntroductionStyled>
		<ServicesPageContent />
		<CompanyOverview />
		<HelpSection />
	</MainLayout>
)

export default memo(ServicesPage)
