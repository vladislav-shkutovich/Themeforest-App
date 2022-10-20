import styled from 'styled-components'

export const TestimonialsStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5rem;
`

export const HeadingTestimonials = styled.div`
	display: flex;
	justify-content: space-between;

	& > h2 {
		${({ theme }) => theme.headlines.headline2}
		width: minmax(min-content, 25rem);
	}
`

export const TestimonialsCardsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	height: minmax(min-content, 37rem);
	max-height: 37rem;
`
