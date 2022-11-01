import styled from 'styled-components'

export const BlogItemStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: minmax(max-content, 63.5rem);
	max-width: 63.5rem;
	gap: 3rem;

	& > img {
		width: 100%;
		border-radius: 0.6rem;
	}

	& > h3 {
		${({ theme }) => theme.headlines.headline3}
		margin: 0 2rem;
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph2}
		color: ${({ theme }) => theme.colors.grey};
		margin: 0 1rem;
	}
`

export const IconsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	column-gap: 3rem;
	row-gap: 1rem;

	& > div {
		display: flex;
		flex-wrap: wrap;
		row-gap: 0.8rem;
		align-items: center;

		& > p {
			${({ theme }) => theme.paragraphs.paragraph3};
			color: ${({ theme }) => theme.colors.grey};
			margin: 0 0.8rem;
		}

		& > img {
			margin: 0 0.5rem;
		}

		& > span {
			font-size: ${({ theme }) => theme.fontSizes.medium};
			color: ${({ theme }) => theme.colors.primary};
			font-weight: 800;
			border: 0.1rem solid ${({ theme }) => theme.colors.background};
			border-radius: 0.6rem;
			padding: 0.3rem 1.1rem;
			margin: 0 0.8rem;
		}
	}
`
