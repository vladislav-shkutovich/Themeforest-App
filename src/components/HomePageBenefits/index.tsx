/* eslint-disable prettier/prettier */
/* eslint-disable no-irregular-whitespace */
import { HOMEPAGE_BENEFITS_CARDS } from '@constants/homePageBenefitsCards'
import { HomePageBenefitsCard } from '@components/HomePageBenefitsCard'

import {
	HeadingBenefits,
	ParagraphBenefits,
	BenefitsContainer,
	CardsContainer,
	FirstColumnCard,
	SecondColumnCard,
} from './styled'

export const HomePageBenefits: React.FC = () => (
	<div>
		<BenefitsContainer>
			<HeadingBenefits>The benefits of Ensome </HeadingBenefits>
			<ParagraphBenefits>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
				laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
				beatae vitae dicta sunt explicabo.
			</ParagraphBenefits>
		</BenefitsContainer>
		<CardsContainer>
			<FirstColumnCard>
				{HOMEPAGE_BENEFITS_CARDS.slice(0, 2).map((item) => (
					<HomePageBenefitsCard {...item} key={item.key} />
				))}
			</FirstColumnCard>
			<SecondColumnCard>
				{HOMEPAGE_BENEFITS_CARDS.slice(2).map((item) => (
					<HomePageBenefitsCard {...item} />
				))}
			</SecondColumnCard>
		</CardsContainer>
	</div>
)
