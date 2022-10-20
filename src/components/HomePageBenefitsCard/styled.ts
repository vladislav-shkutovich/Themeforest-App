import styled from 'styled-components'

export const CardStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: 25.5rem;
	height: 25rem;
	padding: 2.5rem;
	margin: 3rem;
	background-color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.shadows.shadowCard2}
	border-radius: 0.6rem;

	& > img {
		width: 3.6rem;
		height: 3.6rem;
		margin-bottom: 2rem;
		color: ${({ theme }) => theme.colors.primary};
	}

	& > h5 {
		${({ theme }) => theme.headlines.headline5}
		margin-bottom: 1rem;
		width: minmax(min-content, 54rem);
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph3}
		color: ${({ theme }) => theme.colors.grey};
		width: minmax(min-content, 54rem);
	}
`
