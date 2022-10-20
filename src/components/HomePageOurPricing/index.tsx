import { HOMEPAGE_PRICE_CARDS } from '@constants/homepagePriceCards'
import { HomePagePriceCard } from '@components/HomePagePriceCard'
import { OurPricing } from './styled'

export const HomePageOurPricing: React.FC = () => {
	return (
		<OurPricing>
			<h2>Our Pricing</h2>
			<div>
				{HOMEPAGE_PRICE_CARDS.map((item) => (
					<HomePagePriceCard {...item} />
				))}
			</div>
		</OurPricing>
	)
}
