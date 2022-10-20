/* eslint-disable no-irregular-whitespace */
import { HOMEPAGE_LOGOS } from '@constants/homepageLogos'
import {
	HeadingServices,
	ParagraphServices,
	AchivementsServices,
	LogosContainer,
	Logo,
} from './styled'

export const HomePageServices: React.FC = () => (
	<>
		<HeadingServices>We provide services that guarantee your success</HeadingServices>
		<div>
			<AchivementsServices>
				<span>1830+</span>
				Project executed
			</AchivementsServices>
			<AchivementsServices>
				<span>834+</span>
				Satisfied customers
			</AchivementsServices>
			<AchivementsServices>
				<span>390</span>
				Data management
			</AchivementsServices>
			<ParagraphServices>
				Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
				laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor
				quam, non mollis quam finibus nec.
			</ParagraphServices>
		</div>
		<LogosContainer>
			{HOMEPAGE_LOGOS.map((item) => (
				<Logo src={item} key={item} />
			))}
		</LogosContainer>
	</>
)
