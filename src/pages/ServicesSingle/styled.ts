import styled from 'styled-components'

export const IntroductionStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-width: 100vw;
	border-top: 6rem solid ${({ theme }) => theme.colors.background};
	background-color: ${({ theme }) => theme.colors.background};
	border-bottom: 6rem solid ${({ theme }) => theme.colors.background};

	& > h2 {
		${({ theme }) => theme.headlines.headline2}
		color: ${({ theme }) => theme.colors.primary};
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph3}
		color: ${({ theme }) => theme.colors.grey};
		width: minmax(min-content, 35rem);
		max-width: 35rem;
	}
`
