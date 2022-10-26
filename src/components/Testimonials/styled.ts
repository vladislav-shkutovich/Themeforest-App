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
		margin-right: 3rem;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.slidersFirst}) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5rem;

		& > h2 {
			${({ theme }) => theme.headlines.headline3}
			margin-right: 0;
		}
	}
`

export const TestimonialsCardsContainer = styled.div`
	display: flex;
	justify-content: start;
	align-items: stretch;
	gap: 3rem;
	height: minmax(min-content, 37rem);
	max-height: 37rem;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.slidersFirst}) {
		max-width: 75rem;
		overflow: hidden;
		margin-left: 7.5vw;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.slidersSecond}) {
		max-width: 35rem;
	}
`
