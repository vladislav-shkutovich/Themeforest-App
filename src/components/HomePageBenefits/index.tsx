/* eslint-disable no-irregular-whitespace */
import { HOMEPAGE_BENEFITS_CARDS } from '@constants/homepageBenefitsCards'
import { HomePageBenefitsCard } from '@components/HomePageBenefitsCard'

import {
	HeadingBenefits,
	ParagraphBenefits,
	BenefitsContainer,
	FirstColumnCard,
	SecondColumnCard,
} from './styled'

export const HomePageBenefits: React.FC = () => (
	<>
		<BenefitsContainer>
			<HeadingBenefits>The benefits of Ensome </HeadingBenefits>
			<ParagraphBenefits>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
				laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
				architecto beatae vitae dicta sunt explicabo.
			</ParagraphBenefits>
		</BenefitsContainer>
		<div>
			<FirstColumnCard>
				{HOMEPAGE_BENEFITS_CARDS.slice(0, 2).map((item) => (
					<HomePageBenefitsCard {...item} />
				))}
			</FirstColumnCard>
			<SecondColumnCard>
				{HOMEPAGE_BENEFITS_CARDS.slice(2).map((item) => (
					<HomePageBenefitsCard {...item} />
				))}
			</SecondColumnCard>
		</div>
	</>
)
