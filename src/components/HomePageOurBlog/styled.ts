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
`

export const OurBlogCardsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	height: minmax(min-content, 49rem);
	max-height: 49rem;
`
