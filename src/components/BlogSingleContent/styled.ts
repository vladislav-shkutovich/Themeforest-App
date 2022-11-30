import styled from 'styled-components'

export const BlogSingleContentStyled = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	column-gap: 5rem;
`

export const ContentStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	max-width: 63.5rem;
	gap: 6rem;
	margin: 8rem 0;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.blogSingleFirst}) {
		margin-top: 6rem;
		margin-bottom: 3rem;
	}
`

export const NavigationStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: max-content;
	max-width: 44.5rem;
	gap: 2rem;
	margin: 8rem 0;
	padding: 8rem 0;

	& > h4 {
		${({ theme }) => theme.headlines.headline4};
		margin: 1rem 2rem;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.blogSingleFirst}) {
		margin-top: 3rem;
		margin-bottom: 6rem;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.blogSingleWrap}) {
		margin-top: 0rem;
	}
`

export const TagsContainerStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`
