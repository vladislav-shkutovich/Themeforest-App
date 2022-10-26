import styled from 'styled-components'

export const OurBlogCardStyled = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 35rem;
	width: minmax(min-content, 35rem);
	max-width: 35rem;
	height: minmax(min-content, 48rem);
	max-height: 48rem;
	background-color: ${({ theme }) => theme.colors.white};

	& > img {
		width: 100%;
		height: 20rem;
		margin-bottom: 2rem;
	}

	& > h6 {
		${({ theme }) => theme.paragraphs.paragraph3}
		color: ${({ theme }) => theme.colors.grey};
		margin-bottom: 1.2rem;
	}

	& > h4 {
		${({ theme }) => theme.headlines.headline4}
		width: minmax(min-content, 100%);
		max-width: 100%;
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph2}
		color: ${({ theme }) => theme.colors.grey};
		width: minmax(min-content, 100%);
		max-width: 100%;
		margin-bottom: 1.2rem;
	}

	& > button {
		display: flex;
		background: none;
		border: none;

		& > a {
			${({ theme }) => theme.headlines.headline7}
			color: ${({ theme }) => theme.colors.primary};
			text-decoration: none;
		}
	}
`
