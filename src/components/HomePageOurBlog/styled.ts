import styled from 'styled-components'

export const OurBlogStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5rem;
`

export const HeadingOurBlog = styled.div`
	display: flex;
	justify-content: space-between;

	& > h2 {
		${({ theme }) => theme.headlines.headline2}
		width: minmax(min-content, 25rem);
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

export const OurBlogCardsContainer = styled.div`
	display: flex;
	gap: 3rem;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.slidersFirst}) {
		max-width: 75rem;
		overflow: hidden;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.slidersSecond}) {
		max-width: 35rem;
	}
`
