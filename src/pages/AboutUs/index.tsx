import { memo } from 'react'
import { AboutUsPageContent } from '@components/AboutUsPageContent'
import { Testimonials } from '@components/Testimonials'
import { ContactUs } from '@components/ContactUs'
import { MainLayout } from '@layouts/MainLayout'
import { IntroductionStyled, TestimonialsWrapper } from './styled'

const AboutUsPage: React.FC = () => (
	<MainLayout>
		<IntroductionStyled>About Us</IntroductionStyled>
		<AboutUsPageContent />
		<TestimonialsWrapper>
			<Testimonials />
		</TestimonialsWrapper>
		<ContactUs />
	</MainLayout>
)

export default memo(AboutUsPage)
