import { TESTIMONIALS_ITEMS } from '@constants/testimonialsItems'
import { ButtonsSliderDefault } from '@components/ButtonsSliderDefault'
import { TestimonialsCard } from '@components/TestimonialsCard'
import { TestimonialsStyled, HeadingTestimonials, TestimonialsCardsContainer } from './styled'

export const Testimonials: React.FC = () => {
	return (
		<TestimonialsStyled>
			<HeadingTestimonials>
				<h2>Testimonials </h2>
				<ButtonsSliderDefault />
			</HeadingTestimonials>
			<TestimonialsCardsContainer>
				{TESTIMONIALS_ITEMS.map((item) => (
					<TestimonialsCard {...item} />
				))}
			</TestimonialsCardsContainer>
		</TestimonialsStyled>
	)
}
