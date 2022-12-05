import { memo } from 'react'
import solutionsImage1 from '@assets/images/solutions_1.png'
import checkMark from '@assets/icons/check_mark.svg'
import { HelpSection } from '@components/HelpSection'
import { SolutionsPageContent } from '@components/SolutionsPageContent'
import { Testimonials } from '@components/Testimonials'
import { MainLayout } from '@layouts/MainLayout'
import { IntroductionStyled, DummyContentStyled, TestimonialsWrapper } from './styled'

const SolutionsPage: React.FC = () => (
	<MainLayout>
		<IntroductionStyled>
			<h6>Solutions</h6>
			<h1>Data analytics solutions</h1>
			<p>Getting ready for your success, we provide truly outstanding IT solutions.</p>
		</IntroductionStyled>

		<SolutionsPageContent />

		<DummyContentStyled>
			<img src={solutionsImage1} alt="About Us 1" />
			<ul>
				<h1>Who we are</h1>
				<li>
					<div>
						<img src={checkMark} alt="Check mark" />
						<h6>Machine learning</h6>
					</div>
					<p>
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
						voluptatum deleniti atque corrupti quos dolores.
					</p>
				</li>
				<li>
					<div>
						<img src={checkMark} alt="Check mark" />
						<h6>Embed analytics</h6>
					</div>
					<p>
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
						voluptatum deleniti atque corrupti quos dolores.
					</p>
				</li>
				<li>
					<div>
						<img src={checkMark} alt="Check mark" />
						<h6>Access control</h6>
					</div>
					<p>
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
						voluptatum deleniti atque corrupti quos dolores.
					</p>
				</li>
			</ul>
		</DummyContentStyled>

		<TestimonialsWrapper>
			<Testimonials />
		</TestimonialsWrapper>
		<HelpSection />
	</MainLayout>
)

export default memo(SolutionsPage)
