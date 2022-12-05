import { memo } from 'react'
import { FAQsPageContent } from '@components/FAQsPageContent'
import { HelpSection } from '@components/HelpSection'
import { MainLayout } from '@layouts/MainLayout'
import { IntroductionStyled } from './styled'

const FAQsPage: React.FC = () => (
	<MainLayout>
		<IntroductionStyled>
			<h6>FAQs</h6>
			<h1>Frequently asked questions</h1>
			<p>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
				laudantium totam.
			</p>
		</IntroductionStyled>
		<FAQsPageContent />
		<HelpSection />
	</MainLayout>
)

export default memo(FAQsPage)
