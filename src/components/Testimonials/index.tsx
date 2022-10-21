import { useState } from 'react'
import { TESTIMONIALS_ITEMS } from '@constants/testimonialsItems'
import { ButtonsSliderDefault } from '@components/ButtonsSliderDefault'
import { TestimonialsCard } from '@components/TestimonialsCard'
import { TestimonialsStyled, HeadingTestimonials, TestimonialsCardsContainer } from './styled'

export const Testimonials: React.FC = () => {
	// todo вынести в отдельный хук
	const [cardIndex, setCardIndex] = useState(0)
	const [activityState, setActivityState] = useState([true, false])
	const handlePrevItem = () => {
		setCardIndex((prevState) => {
			if (cardIndex < 5) setActivityState([false, false])
			if (cardIndex === 1) setActivityState([true, false])
			return prevState - 1
		})
	}
	const handleNextItem = () => {
		setCardIndex((prevState) => {
			if (cardIndex + 1 !== 0) setActivityState([false, false])
			if (cardIndex === 2) setActivityState([false, true])
			return prevState + 1
		})
	}

	return (
		<TestimonialsStyled>
			<HeadingTestimonials>
				<h2>Testimonials </h2>
				<ButtonsSliderDefault
					activityState={activityState}
					callbackPrev={handlePrevItem}
					callbackNext={handleNextItem}
				/>
			</HeadingTestimonials>
			<TestimonialsCardsContainer>
				{TESTIMONIALS_ITEMS.slice(cardIndex, cardIndex + 3).map((item) => (
					<TestimonialsCard {...item} />
				))}
			</TestimonialsCardsContainer>
		</TestimonialsStyled>
	)
}
