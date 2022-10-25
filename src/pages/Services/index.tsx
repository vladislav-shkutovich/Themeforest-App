import { CompanyOverview } from '@components/CompanyOverview'
import { HelpSection } from '@components/HelpSection'
import { ServicesPageContent } from '@components/ServicesPageContent'
import { ServicesPageIntroduction } from '@components/ServicesPageIntroduction'
import { MainLayout } from '@layouts/MainLayout'

export const ServicesPage: React.FC = () => (
	<MainLayout>
		<ServicesPageIntroduction />
		<ServicesPageContent />
		<CompanyOverview />
		<HelpSection />
	</MainLayout>
)
