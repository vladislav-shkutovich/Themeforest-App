/* eslint-disable no-irregular-whitespace */
import { MainLayout } from '@layouts/MainLayout'
import { HomePageIntroduction } from '@components/HomePageIntroduction'
import { HomePageServices } from '@components/HomePageServices'
import { HomePageBenefits } from '@components/HomePageBenefits'
import { Testimonials } from '@components/Testimonials'

import {
	SetcionIntroduction,
	SetcionServices,
	SectionBenefits,
	SectionSliders,
	SetcionHelp,
} from './styled'

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
		</SectionSliders>

		<SetcionHelp>SetcionHelp</SetcionHelp>
	</MainLayout>
)
