/* eslint-disable no-irregular-whitespace */
import { MainLayout } from '@layouts/MainLayout'
import { HomePageIntroduction } from '@components/HomePageIntroduction'
import { HomePageServices } from '@components/HomePageServices'
import { HomePageBenefits } from '@components/HomePageBenefits'
import { Testimonials } from '@components/Testimonials'
import { OurPricing } from '@components/OurPricing'
import { OurBlog } from '@components/OurBlog'
import { HelpSection } from '@components/HelpSection'
import { SetcionIntroduction, SetcionServices, SectionBenefits, SectionSliders } from './styled'

export const HomePage: React.FC = () => (
	<MainLayout>
		<SetcionIntroduction>
			<HomePageIntroduction />
		</SetcionIntroduction>

		<SetcionServices>
			<HomePageServices />
		</SetcionServices>

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
