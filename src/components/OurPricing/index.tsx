import { OUR_PRICING_CARDS } from '@constants/ourPricingCards'
import { OurPricingCard } from '@components/OurPricingCard'
import { OurPricingStyled } from './styled'

export const OurPricing: React.FC = () => {
	return (
		<OurPricingStyled>
			<h2>Our Pricing</h2>
			<div>
				{OUR_PRICING_CARDS.map((item) => (
					<OurPricingCard {...item} />
				))}
			</div>
		</OurPricingStyled>
	)
}
