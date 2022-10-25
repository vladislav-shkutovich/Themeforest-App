/* eslint-disable no-irregular-whitespace */
import { HOMEPAGE_LOGOS } from '@constants/homepageLogos'
import {
	HeadingOverview,
	ParagraphOverview,
	AchivementsOverview,
	LogosContainer,
	Logo,
} from './styled'

export const CompanyOverview: React.FC = () => (
	<>
		<HeadingOverview>We provide services that guarantee your success</HeadingOverview>
		<div>
			<AchivementsOverview>
				<span>1830+</span>
				Project executed
			</AchivementsOverview>
			<AchivementsOverview>
				<span>834+</span>
				Satisfied customers
			</AchivementsOverview>
			<AchivementsOverview>
				<span>390</span>
				Data management
			</AchivementsOverview>
			<ParagraphOverview>
				Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
				laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor
				quam, non mollis quam finibus nec.
			</ParagraphOverview>
		</div>
		<LogosContainer>
			{HOMEPAGE_LOGOS.map((item) => (
				<Logo src={item} key={item} />
			))}
		</LogosContainer>
	</>
)
