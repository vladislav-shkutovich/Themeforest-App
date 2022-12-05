/* eslint-disable no-irregular-whitespace */
import { memo } from 'react'
import { MainLayout } from '@layouts/MainLayout'
import { HomePageIntroduction } from '@components/HomePageIntroduction'
import { CompanyOverview } from '@components/CompanyOverview'
import { HomePageBenefits } from '@components/HomePageBenefits'
import { Testimonials } from '@components/Testimonials'
import { OurPricing } from '@components/OurPricing'
import { OurBlog } from '@components/HomePageOurBlog'
import { HelpSection } from '@components/HelpSection'
import { SetcionIntroduction, SectionBenefits, SectionSliders } from './styled'

const HomePage: React.FC = () => (
	<MainLayout>
		<SetcionIntroduction>
			<HomePageIntroduction />
		</SetcionIntroduction>

		<CompanyOverview />

		<SectionBenefits>
			<HomePageBenefits />
		</SectionBenefits>

		<SectionSliders>
			<Testimonials />
			<OurPricing />
			<OurBlog />
		</SectionSliders>

		<HelpSection />
	</MainLayout>
)

export default memo(HomePage)
